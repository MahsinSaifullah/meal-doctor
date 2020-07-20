const mongoose = require('mongoose');

const DailyStatSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	date: {
		type: String,
	},
	allMealId: {
		type: [mongoose.Schema.Types.ObjectId],
	},
	totalCalories: {
		type: Number,
	},
	totalProtein: {
		type: Number,
	},
	totalProteinParcentage: {
		type: Number,
	},
	totalCarb: {
		type: Number,
	},
	totalCarbParcentage: {
		type: Number,
	},
	totalFat: {
		type: Number,
	},
	totalFatParcentage: {
		type: Number,
	},
	totalFiber: {
		type: Number,
	},
	totalFiberParcentage: {
		type: Number,
	},
	numOfHealthyMeals: {
		type: Number,
	},
});

module.exports = mongoose.model('dailyStat', DailyStatSchema);
