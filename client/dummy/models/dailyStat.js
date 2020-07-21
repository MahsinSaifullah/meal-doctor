class DailyStat {
	constructor(
		user,
		date,
		totalCalories,
		totalProtein,
		totalProteinParcentage,
		totalCarb,
		totalCarbParcentage,
		totalFat,
		totalFatParcentage,
		totalFiber,
		totalFiberParcentage,
		numOfHealthyMeals
	) {
		this.user = user;
		this.date = date;
		this.totalCalories = totalCalories;
		this.totalProtein = totalProtein;
		this.totalProteinParcentage = totalProteinParcentage;
		this.totalCarb = totalCarb;
		this.totalCarbParcentage = totalCarbParcentage;
		this.totalFat = totalFat;
		this.totalFatParcentage = totalFatParcentage;
		this.totalFiber = totalFiber;
		this.totalFiberParcentage = totalFiberParcentage;
		this.numOfHealthyMeals = numOfHealthyMeals;
	}
}

export default DailyStat;
