import { SEARCH_MEAL_CALORIES } from '../types';

const initialState = {
	mealCaloriesDetectionResponse: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_MEAL_CALORIES:
			return {
				...state,
				mealCaloriesDetectionResponse: action.payload,
			};
		default:
			return state;
	}
};
