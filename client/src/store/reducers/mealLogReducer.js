import { DAILYSTAT, FOODLOGS } from '../../../dummy/data/dummyData';
import { SET_DATE, SET_CURRENTMEALTYPE } from '../types';

const initialState = {
	dailyStats: DAILYSTAT,
	foodLogs: FOODLOGS,
	chosenDate: Date.now(),
	currentMealType: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				chosenDate: action.payload,
			};
		case SET_CURRENTMEALTYPE:
			return {
				...state,
				currentMealType: action.payload,
			};
		default:
			return state;
	}
};
