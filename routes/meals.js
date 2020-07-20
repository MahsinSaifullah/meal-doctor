const express = require('express');
const config = require('config');
const axios = require('axios');

const { check, validationResult } = require('express-validator');

const router = express.Router();
const auth = require('../middleware/auth');
const Meal = require('../models/Meal');

//@route    GET api/meals
//@desc     Get all the users meals
//@access   Private
router.get('/', async (req, res) => {
	try {
		// find meal by the user id
		const meals = await Meal.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.status(200).json(meals);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/meals
//@desc     Add new meal
//@access   Private
router.post(
	'/',
	[
		auth,
		[
			check('mealName', 'Meal Name is required').not().isEmpty(),
			check('edamamFoodId', 'Edamam Food Id is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// create a new meal object from formdata
		const {
			mealName,
			edamamFoodId,
			edamamImageURL,
			caloriePer100,
			proteinPer100,
			carbPer100,
			fatPer100,
			fiberPer100,
		} = req.body;

		try {
			const newMeal = new Meal({
				user: req.user.id,
				mealName,
				edamamFoodId,
				edamamImageURL,
				caloriePer100,
				proteinPer100,
				carbPer100,
				fatPer100,
				fiberPer100,
			});

			//save meal to database
			const meal = await newMeal.save();
			res.status(200).json(meal);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/meals/:id
//@desc     Delete a meal
//@access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let meal = await Meal.findById(req.params.id);

		if (!meal) return res.status(404).json({ msg: 'Meal not found' });

		if (meal.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not Authorized' });

		await Meal.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Meal Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
