import { DAILYSTAT, FOODLOGS } from '../../../dummy/data/dummyData';
import { SET_DATE } from '../types';

const initialState = {
	dailyState: DAILYSTAT,
	foodLogs: FOODLOGS,
	displayedFoodLogs: FOODLOGS,
	chosenDate: Date.now(),
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				chosenDate: action.payload,
			};
		default:
			return state;
	}
};
