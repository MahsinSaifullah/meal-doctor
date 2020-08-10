const mongoose = require('mongoose');

const FoodLogSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	mealName: {
		type: String,
		required: true,
	},
	mealType: {
		type: String,
		required: true,
	},
	edamamFoodId: {
		type: String,
		required: true,
	},
	edamamMeasuringUrl: {
		type: String,
		required: true,
	},
	measuringUnit: {
		type: String,
		required: true,
	},
	mealQuantity: {
		type: Number,
		required: true,
	},
	awsImageURL: {
		type: String,
	},
	awsImageKey: {
		type: String,
	},
	mindfulness: {
		type: Number,
	},
	calorie: {
		type: Number,
	},
	protein: {
		type: Number,
	},
	proteinParcentage: {
		type: Number,
	},
	carb: {
		type: Number,
	},
	carbParcentage: {
		type: Number,
	},
	fat: {
		type: Number,
	},
	fatParcentage: {
		type: Number,
	},
	satFat: {
		type: Number,
	},
	satFatParcentage: {
		type: Number,
	},
	fiber: {
		type: Number,
	},
	fiberParcentage: {
		type: Number,
	},
	salt: {
		type: Number,
	},
	saltParcentage: {
		type: Number,
	},
	cholestrol: {
		type: Number,
	},
	cholestrolParcentage: {
		type: Number,
	},
	isHealthy: {
		type: Boolean,
	},
	dietLabels: {
		type: [String],
	},
	healthLabels: {
		type: [String],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('foodLog', FoodLogSchema);
