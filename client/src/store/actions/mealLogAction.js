import { SET_DATE, SET_CURRENTMEALTYPE } from '../types';

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
