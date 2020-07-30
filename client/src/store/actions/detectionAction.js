import axios from 'axios';

import {
	SEARCH_MEAL_CALORIES,
	CLEAR_MEAL_CALORIES,
	DETECT_IMAGE,
	CLEAR_IMAGE_DETECTION,
} from '../types';
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

		dispatch({ type: SEARCH_MEAL_CALORIES, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};

// clear meal calories response from redux
export const clearMealCalories = () => {
	return {
		type: CLEAR_MEAL_CALORIES,
	};
};

// image detection
export const detectImage = (image) => async (dispatch) => {
	let data = new FormData();
	data.append('image', {
		uri: image.uri,
		type: 'image/jpeg',
		name: 'mealDoctor.jpeg',
	});

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/detection/images`,
			data
		);

		dispatch({ type: DETECT_IMAGE, payload: res.data });
	} catch (error) {
		console.log(error.response.data);
		throw new Error(error.response.data);
	}
};

// clear image detection response
export const clearImageDetection = () => {
	return {
		type: CLEAR_IMAGE_DETECTION,
	};
};
