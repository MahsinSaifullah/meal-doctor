import axios from 'axios';

import {
	SEARCH_MEAL_CALORIES,
	CLEAR_MEAL_CALORIES,
	DETECT_IMAGE,
	CLEAR_IMAGE_DETECTION,
	SELECT_MEAL,
	CLEAR_SELECT_MEAL,
	ADD_MEASURING_UNIT,
	CLEAR_MEASURING_UNIT,
	ADD_MEASURING_QUANTITY,
	CLEAR_MEASURING_QUANTITY,
	SEARCH_FOODLOG,
	CLEAR_FOODLOG_RESPONSE,
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

// clear meal calories response from detection reducer
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

// clear image detection response from detection reducer
export const clearImageDetection = () => {
	return {
		type: CLEAR_IMAGE_DETECTION,
	};
};

//handle selected meal
export const selectMeal = (selectedMeal) => {
	return {
		type: SELECT_MEAL,
		payload: selectedMeal,
	};
};

//clear selected meal from detection reducer
export const clearSelectedMeal = () => {
	return {
		type: CLEAR_SELECT_MEAL,
	};
};

// add measuring unit label and uri to detection reducer
export const addMeasuringUnit = (unit) => {
	return {
		type: ADD_MEASURING_UNIT,
		payload: unit,
	};
};

// clear measuring unit label and uri from detection reducer
export const clearMeasuringUnit = () => {
	return {
		type: CLEAR_MEASURING_UNIT,
	};
};
export const addMeasuringQuantity = (quantity) => {
	return {
		type: ADD_MEASURING_QUANTITY,
		payload: quantity,
	};
};

// clear measuring unit label and uri from detection reducer
export const clearMeasuringQuantity = () => {
	return {
		type: CLEAR_MEASURING_QUANTITY,
	};
};

export const searchFoodLog = (foodlogData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/detection/foodlogs`,
			foodlogData,
			config
		);

		dispatch({ type: SEARCH_FOODLOG, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};

// clear measuring unit label and uri from detection reducer
export const clearFoodLogResponse = () => {
	return {
		type: CLEAR_FOODLOG_RESPONSE,
	};
};
