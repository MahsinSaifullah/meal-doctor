import axios from 'axios';

import {
	SET_DATE,
	SET_CURRENTMEALTYPE,
	GET_FOODLOGS,
	ADD_FOODLOG,
	CLEAR_FOODLOG,
	GET_DAILY_STATS,
	SET_MINDFULNESS,
	CLEAR_MINDFULNESS,
	DELETE_FOODLOG,
} from '../types';
import ServerURL from '../../constants/ServerURL';

// set the display date of track screen
export const setDate = (date) => {
	return {
		type: SET_DATE,
		payload: date,
	};
};

// set the meal type for adding foodlog
export const setCurrentMealType = (mealType) => {
	return {
		type: SET_CURRENTMEALTYPE,
		payload: mealType,
	};
};

// get all of users foodlog
export const getFoodLogs = () => async (dispatch) => {
	try {
		const res = await axios.get(`${ServerURL.devServer}/api/foodlog`);
		dispatch({ type: GET_FOODLOGS, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};

// add foodlog to database
export const addFoodLog = (data) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/foodlog`,
			data,
			config
		);

		dispatch({ type: ADD_FOODLOG, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};

// clear meal calories response from detection reducer
export const clearFoodLog = () => {
	return {
		type: CLEAR_FOODLOG,
	};
};

// get all of users daily Stats
export const getDailyStats = () => async (dispatch) => {
	try {
		const res = await axios.get(`${ServerURL.devServer}/api/stats`);
		dispatch({ type: GET_DAILY_STATS, payload: res.data });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};

export const setMindfulness = (mindfulness) => {
	return {
		type: SET_MINDFULNESS,
		payload: mindfulness,
	};
};

export const clearMindfulness = () => {
	return {
		type: CLEAR_MINDFULNESS,
	};
};

export const deleteFoodLog = (id) => async (dispatch) => {
	try {
		await axios.delete(`${ServerURL.devServer}/api/foodlog/${id}`);
		dispatch({ type: DELETE_FOODLOG, payload: id });
	} catch (err) {
		console.log(err.message);
		throw new Error(error.response.data);
	}
};
