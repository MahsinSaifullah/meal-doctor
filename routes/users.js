const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');
const jwtSecret = config.get('jwtSecret');
const auth = require('../middleware/auth');
const calculateGoalCalories = require('../helpers/calculateGoalCalories');
const router = express.Router();

//@route    POST api/users
//@desc     Register a User
//@access   Public
router.post(
	'/',
	[
		check('name', 'Please add a name').not().isEmpty(),
		check('gender', 'Please add a gender').not().isEmpty(),
		check('age', 'Please add an age').not().isEmpty(),
		check('weight', 'Please add a weight').not().isEmpty(),
		check('height', 'Please add a height').not().isEmpty(),
		check('goal', 'Please add a goal').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			name,
			gender,
			age,
			height,
			weight,
			activityLevel,
			goal,
			email,
			password,
		} = req.body;

		const goalCalories = calculateGoalCalories(req.body);

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: 'User already Exits' });
			}

			// create a new user object from form data
			user = new User({
				name,
				gender,
				age,
				height,
				weight,
				activityLevel,
				goal,
				goalCalories,
				email,
				password,
			});

			// hash password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			//save user to database
			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			//sign and send jwt
			jwt.sign(payload, jwtSecret, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    PUT api/users/:id
//@desc     Update user info
//@access   Private
router.put('/:id', auth, async (req, res) => {
	const { name, gender, age, height, weight, activityLevel, goal } = req.body;

	const userFields = {};

	if (name) userFields.name = name;
	if (gender) userFields.gender = gender;
	if (age) userFields.age = age;
	if (height) userFields.height = height;
	if (weight) userFields.weight = weight;
	if (activityLevel) userFields.activityLevel = activityLevel;
	if (goal) userFields.goal = goal;

	try {
		let user = await User.findById(req.params.id);

		if (!user) return res.status(404).json({ msg: 'User not found' });

		user = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: userFields },
			{ new: true }
		);

		const goalCalories = calculateGoalCalories(user);

		user = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: { goalCalories: goalCalories } },
			{ new: true }
		);

		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
