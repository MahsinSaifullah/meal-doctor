const mongoose = require('mongoose');

const MealSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	mealName: {
		type: String,
		required: true,
	},
	edamamFoodId: {
		type: String,
		required: true,
	},
	edamamImageURL: {
		type: String,
	},
	caloriePer100: {
		type: Number,
	},
	proteinPer100: {
		type: Number,
	},
	carbPer100: {
		type: Number,
	},
	fatPer100: {
		type: Number,
	},
	fiberPer100: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('meal', MealSchema);
