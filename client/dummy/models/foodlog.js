class Foodlogs {
	constructor(
		user,
		mealName,
		mealType,
		edamamFoodId,
		edamamMeasuringUrl,
		measuringUnit,
		mealQuantity,
		awsImageURL,
		awsImageKey,
		timeToFinishMeal,
		calorie,
		protein,
		proteinParcentage,
		carb,
		carbParcentage,
		fat,
		fatParcentage,
		satFat,
		satFatParcentage,
		fiber,
		fiberParcentage,
		salt,
		saltParcentage,
		cholestrol,
		cholestrolParcentage,
		isHealthy,
		dietLabels,
		healthLabels,
		date
	) {
		this.user = user;
		this.mealName = mealName;
		this.mealType = mealType;
		this.edamamFoodId = edamamFoodId;
		this.edamamMeasuringUrl = edamamMeasuringUrl;
		this.measuringUnit = measuringUnit;
		this.mealQuantity = mealQuantity;
		this.awsImageURL = awsImageURL;
		this.awsImageKey = awsImageKey;
		this.timeToFinishMeal = timeToFinishMeal;
		this.calorie = calorie;
		this.protein = protein;
		this.proteinParcentage = proteinParcentage;
		this.carb = carb;
		this.carbParcentage = carbParcentage;
		this.fat = fat;
		this.fatParcentage = fatParcentage;
		this.satFat = satFat;
		this.satFatParcentage = satFatParcentage;
		this.fiber = fiber;
		this.fiberParcentage = fiberParcentage;
		this.salt = salt;
		this.saltParcentage = saltParcentage;
		this.cholestrol = cholestrol;
		this.cholestrolParcentage = cholestrolParcentage;
		this.isHealthy = isHealthy;
		this.dietLabels = dietLabels;
		this.healthLabels = healthLabels;
		this.date = date;
	}
}

export default Foodlogs;
