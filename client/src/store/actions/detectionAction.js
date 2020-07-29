import axios from 'axios';

import { SEARCH_MEAL_CALORIES } from '../types';
import ServerURL from '../../constants/ServerURL';

// general meal calories detection
export const searchMealCalories = (mealName) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const data = {
		mealName,
	};

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/detection/meals`,
			data,
			config
		);

		console.log(res.data);
		dispatch({ type: SEARCH_MEAL_CALORIES, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};
