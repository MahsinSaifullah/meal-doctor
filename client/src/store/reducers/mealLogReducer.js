import moment from 'moment';

import { DAILYSTAT, FOODLOGS } from '../../../dummy/data/dummyData';
import {
	SET_DATE,
	SET_CURRENTMEALTYPE,
	GET_FOODLOGS,
	ADD_FOODLOG,
	CLEAR_FOODLOG,
	GET_DAILY_STATS,
} from '../types';

const initialState = {
	dailyStats: [],
	foodLogs: [],
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
		case GET_FOODLOGS:
			return {
				...state,
				foodLogs: action.payload,
			};
		case GET_DAILY_STATS:
			return {
				...state,
				dailyStats: action.payload,
			};
		case ADD_FOODLOG:
			return {
				...state,
				foodLogs: [...state.foodLogs, action.payload.foodlog],
				dailyStats: [
					...state.dailyStats.filter((dailyStat) => {
						const isDateMatch = moment(dailyStat.date, 'DD MMMM YYYY').isSame(
							moment(state.chosenDate),
							'date'
						);

						return isDateMatch;
					}),
					action.payload.dailyStat,
				],
			};
		case CLEAR_FOODLOG:
			return {
				...state,
				foodLogs: [],
				dailyStats: [],
			};
		default:
			return state;
	}
};
