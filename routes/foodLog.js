const express = require('express');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const config = require('config');
const axios = require('axios');

const auth = require('../middleware/auth');
const FoodLog = require('../models/FoodLog');
const DailyStat = require('../models/DailyStat');
const router = express.Router();

//@route    GET api/foodlog
//@desc     Get all users' food logs
//@access   Private
router.get('/', auth, async (req, res) => {
	try {
		const foodlog = await FoodLog.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(foodlog);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/foodlog
//@desc     Add a new food log
//@access   Private
router.post(
	'/',
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
			mealType,
			awsImageURL,
			awsImageKey,
			timeToFinishMeal,
			calorie,
			protein,
			carb,
			fat,
			satFat,
			fiber,
			salt,
			cholestrol,
			proteinParcentage,
			carbParcentage,
			fatParcentage,
			satFatParcentage,
			fiberParcentage,
			saltParcentage,
			cholestrolParcentage,
			isHealthy,
			dietLabels,
			healthLabels,
			date,
		} = req.body;

		try {
			const newFoodLog = new FoodLog({
				user: req.user.id,
				mealName,
				mealType,
				edamamFoodId,
				edamamMeasuringUrl,
				measuringUnit,
				mealQuantity,
				awsImageURL: !awsImageURL ? awsImageURL : '',
				awsImageKey: !awsImageKey ? awsImageKey : '',
				timeToFinishMeal,
				calorie,
				protein,
				carb,
				fat,
				satFat,
				fiber,
				salt,
				cholestrol,
				proteinParcentage,
				carbParcentage,
				fatParcentage,
				satFatParcentage,
				fiberParcentage,
				saltParcentage,
				cholestrolParcentage,
				isHealthy,
				dietLabels,
				healthLabels,
				date: !date ? date : Date.now(),
			});

			// save food log to database
			const foodlog = await newFoodLog.save();

			const foodLogDate = moment(foodlog.date).format('DD MMMM YYYY');

			let dailyStat = await DailyStat.findOne({
				user: foodlog.user,
				date: foodLogDate.toString(),
			});

			if (dailyStat) {
				if (!dailyStat.allMealId.includes(foodlog._id)) {
					dailyStat.allMealId.push(foodlog._id);
					dailyStat.totalCalories = dailyStat.totalCalories + foodlog.calorie;
					dailyStat.totalProtein = dailyStat.totalProtein + foodlog.protein;
					dailyStat.totalProteinParcentage = Math.ceil(
						((dailyStat.totalProtein * 4) / dailyStat.totalCalories) * 100
					);
					dailyStat.totalCard = dailyStat.totalCard + foodlog.card;
					dailyStat.totalCarbParcentage = Math.ceil(
						((dailyStat.totalCarb * 4) / dailyStat.totalCalories) * 100
					);
					dailyStat.totalFat = dailyStat.totalFat + foodlog.fat;
					dailyStat.totalFatParcentage = Math.ceil(
						((dailyStat.totalFat * 9) / dailyStat.totalCalories) * 100
					);
					dailyStat.totalFiber = dailyStat.totalFiber + foodlog.fiber;
					dailyStat.totalFiberParcentage = Math.ceil(
						((dailyStat.totalFiber * 4) / dailyStat.totalCalories) * 100
					);
					dailyStat.numOfHealthyMeals = foodlog.isHealthy
						? dailyStat.numOfHealthyMeals + 1
						: dailyStat.numOfHealthyMeals;
				}
			} else {
				dailyStat = new DailyStat({
					user: foodlog.user,
					date: foodLogDate.toString(),
					allMealId: [foodlog._id],
					totalCalories: foodlog.calorie,
					totalProtein: foodlog.protein,
					totalProteinParcentage: Math.ceil(
						((foodlog.protein * 4) / foodlog.calorie) * 100
					),
					totalCarb: foodlog.carb,
					totalCarbParcentage: Math.ceil(
						((foodlog.carb * 4) / foodlog.calorie) * 100
					),
					totalFat: foodlog.fat,
					totalFatParcentage: Math.ceil(
						((foodlog.fat * 9) / foodlog.calorie) * 100
					),
					totalFiber: foodlog.fiber,
					totalFiberParcentage: Math.ceil(
						((foodlog.fiber * 4) / foodlog.calorie) * 100
					),
					numOfHealthyMeals: foodlog.isHealthy ? 1 : 0,
				});
			}

			const savedDailyStat = await dailyStat.save();

			res.status(200).json({ foodlog: foodlog, dailyStat: savedDailyStat });
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    Delete api/foodlog/:id
//@desc     Delete a foodlog
//@access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let foodlog = await FoodLog.findById(req.params.id);

		if (!foodlog) return res.status(404).json({ msg: 'Food Log not found' });

		if (foodlog.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not Authorized' });

		const foodLogDate = moment(foodlog.date).format('MMMM Do YYYY');

		let dailyStat = await DailyStat.findOne({
			user: foodlog.user,
			date: foodLogDate.toString(),
		});

		if (dailyStat) {
			const index = dailyStat.allMealId.indexOf(foodlog._id);
			if (index > -1) {
				dailyStat.allMealId.splice(index, 1);
			}
			dailyStat.totalCalories = dailyStat.totalCalories - foodlog.calorie;
			dailyStat.totalProtein = dailyStat.totalProtein - foodlog.protein;
			dailyStat.totalCarb = dailyStat.totalCarb - foodlog.carb;
			dailyStat.totalFat = dailyStat.totalFat - foodlog.fat;
			dailyStat.totalFiber = dailyStat.totalFiber - foodlog.fiber;

			if (dailyStat.totalCalories !== 0) {
				dailyStat.totalProteinParcentage = Math.ceil(
					((dailyStat.totalProtein * 4) / dailyStat.totalCalories) * 100
				);
				dailyStat.totalCarbParcentage = Math.ceil(
					((dailyStat.totalCarb * 4) / dailyStat.totalCalories) * 100
				);
				dailyStat.totalFatParcentage = Math.ceil(
					((dailyStat.totalFat * 9) / dailyStat.totalCalories) * 100
				);
				dailyStat.totalFiberParcentage = Math.ceil(
					((dailyStat.totalFiber * 4) / dailyStat.totalCalories) * 100
				);
				dailyStat.numOfHealthyMeals = foodlog.isHealthy
					? dailyStat.numOfHealthyMeals - 1
					: dailyStat.numOfHealthyMeals;

				await dailyStat.save();
			} else {
				await DailyStat.findByIdAndRemove(dailyStat.id);
			}
		}

		await FoodLog.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Food log Removed and Daily Stat adjusted' });
	} catch (error) {
		console.error(error);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
