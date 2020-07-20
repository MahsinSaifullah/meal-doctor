const calculateGoalCalories = (user) => {
	const { gender, weight, activityLevel, goal } = user;

	//calculating maintainence calories
	let maintainCalorie;

	if (gender === 'male') {
		switch (activityLevel) {
			case 'very light':
				maintainCalorie = weight * 24 * 0.9 * 1.3;
				break;
			case 'light':
				maintainCalorie = weight * 24 * 0.9 * 1.55;
				break;
			case 'moderate':
				maintainCalorie = weight * 24 * 0.9 * 1.65;
				break;
			case 'heavy':
				maintainCalorie = weight * 24 * 0.9 * 1.8;
				break;
			case 'very heavy':
				maintainCalorie = weight * 24 * 0.9 * 2;
				break;
		}
	} else {
		switch (activityLevel) {
			case 'very light':
				maintainCalorie = weight * 24 * 0.9 * 0.9 * 1.3;
				break;
			case 'light':
				maintainCalorie = weight * 24 * 0.9 * 0.9 * 1.55;
				break;
			case 'moderate':
				maintainCalorie = weight * 24 * 0.9 * 0.9 * 1.65;
				break;
			case 'heavy':
				maintainCalorie = weight * 24 * 0.9 * 0.9 * 1.8;
				break;
			case 'very heavy':
				maintainCalorie = weight * 24 * 0.9 * 0.9 * 2;
				break;
		}
	}

	// calculate goal calories
	let goalCalories;

	if (goal === 'weight gain') goalCalories = Math.ceil(maintainCalorie + 300);
	else if (goal === 'weight loss')
		goalCalories = Math.floor(maintainCalorie - 500);
	else goalCalories = Math.floor(maintainCalorie);

	return goalCalories;
};

module.exports = calculateGoalCalories;
