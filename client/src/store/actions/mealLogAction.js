import { SET_DATE, SET_CURRENTMEALTYPE } from '../types';

export const setDate = (date) => {
	return {
		type: SET_DATE,
		payload: date,
	};
};
export const setCurrentMealType = (mealType) => {
	return {
		type: SET_CURRENTMEALTYPE,
		payload: mealType,
	};
};
