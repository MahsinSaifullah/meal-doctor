const express = require('express');
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const vision = require('@google-cloud/vision');
const aws = require('aws-sdk');

const router = express.Router();
const auth = require('../middleware/auth');
const edamamAppID = config.get('edamamAppID');
const edamamAppKey = config.get('edamamAppKey');
const edamamParseURL = config.get('edamamParseURL');
const edamamNutrientsURL = config.get('edamamNutrientsURL');
const awsID = config.get('awsID');
const awsSecret = config.get('awsSecret');
const awsBucketName = config.get('awsBucketName');
const awsRegion = config.get('awsRegion');
const upload = require('../middleware/upload');
const singleUpload = upload.single('image');

//@route    POST api/detection/meals
//@desc     detect the meal calorie
//@access   Private
router.post(
	'/meals',
	[auth, [check('mealName', 'Meal Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// replace white spaces with '%20'
		const { mealName } = req.body;
		mealNameNormalized = mealName.replace(/ /g, '%20');

		try {
			// get the calorie response from edamam api
			const response = await axios.get(
				`${edamamParseURL}${mealNameNormalized}&app_id=${edamamAppID}&app_key=${edamamAppKey}`
			);

			//Format the response
			const mealResponse = {
				allPossibleFood: [
					...response.data.hints.map((obj) => {
						const foodResponse = {
							edamamFoodId: obj.food.foodId,
							mealName: obj.food.label,
							edamamImageURL: obj.food.image,
							caloriePer100: obj.food.nutrients.ENERC_KCAL,
							proteinPer100: obj.food.nutrients.PROCNT,
							carbPer100: obj.food.nutrients.CHOCDF,
							fatPer100: obj.food.nutrients.FAT,
							fiberPer100: obj.food.nutrients.FIBTG,
							measurementUnits: [...obj.measures],
						};
						return foodResponse;
					}),
				],
			};

			return res.status(200).json(mealResponse);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    POST api/detection/images
//@desc     detect the image
//@access   Private
router.post('/images', [auth, singleUpload], async (req, res) => {
	try {
		// Creates a client
		const client = new vision.ImageAnnotatorClient({
			keyFilename: './config/googleVisionApi.json',
		});

		// Performs label detection on the image file
		const [result] = await client.labelDetection(req.file.location);
		const labels = result.labelAnnotations;

		res.status(200).json({
			awsImageKey: req.file.key,
			awsImageUrl: req.file.location,
			labels: labels.map((label) => label.description),
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/detection/foodlogs
//@desc     detect the total calorie of the meal
//@access   Private
router.post(
	'/foodlogs',
	[
		auth,
		[
			check('edamamFoodId', 'edamamFoodId is required').not().isEmpty(),
			check('edamamMeasuringUrl', 'edamamMeasuringUrl is required')
				.not()
				.isEmpty(),
			check('mealQuantity', 'mealQuantity is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			mealName,
			edamamFoodId,
			edamamMeasuringUrl,
			measuringUnit,
			mealQuantity,
		} = req.body;

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const foodRequestObj = {
			ingredients: [
				{
					quantity: mealQuantity,
					measureURI: edamamMeasuringUrl,
					foodId: edamamFoodId,
				},
			],
		};

		try {
			// get the nutrient response from edamam api
			const response = await axios.post(
				`${edamamNutrientsURL}&app_id=${edamamAppID}&app_key=${edamamAppKey}`,
				foodRequestObj,
				config
			);

			const foodLodResponse = {
				mealName,
				edamamFoodId,
				edamamMeasuringUrl,
				measuringUnit,
				mealQuantity,
				calorie: response.data.totalNutrients.ENERC_KCAL.quantity,
				protein: response.data.totalNutrients.PROCNT.quantity,
				carb: response.data.totalNutrients.CHOCDF.quantity,
				fat: response.data.totalNutrients.FAT.quantity,
				satFat: response.data.totalNutrients.FASAT.quantity,
				fiber: response.data.totalNutrients.FIBTG.quantity,
				salt: response.data.totalNutrients.NA.quantity,
				cholestrol: response.data.totalNutrients.CHOLE.quantity,
				proteinParcentage: response.data.totalDaily.PROCNT.quantity,
				carbParcentage: response.data.totalDaily.CHOCDF.quantity,
				fatParcentage: response.data.totalDaily.FAT.quantity,
				satFatParcentage: response.data.totalDaily.FASAT.quantity,
				fiberParcentage: response.data.totalDaily.FIBTG.quantity,
				saltParcentage: response.data.totalDaily.NA.quantity,
				cholestrolParcentage: response.data.totalDaily.CHOLE.quantity,
				isHealthy:
					response.data.totalDaily.FAT.quantity >= 20 ||
					response.data.totalDaily.FASAT.quantity >= 10 ||
					response.data.totalDaily.NA.quantity >= 20 ||
					response.data.totalDaily.CHOLE.quantity >= 10
						? false
						: true,
				dietLabels: response.data.dietLabels,
				healthLabels: response.data.healthLabels,
			};

			res.status(200).json(foodLodResponse);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/detection/images/:id
//@desc     Delete an image from aws s3
//@access   Private
router.delete('/images/:key', auth, async (req, res) => {
	const s3 = new aws.S3({
		accessKeyId: awsID,
		secretAccessKey: awsSecret,
		region: awsRegion,
	});

	const params = {
		Bucket: awsBucketName,
		Key: req.params.key,
	};

	s3.deleteObject(params, (error, data) => {
		if (error) {
			res.status(500).send(error);
		}
		res.status(200).json({ msg: 'file successfully deleted' });
	});
});

module.exports = router;
