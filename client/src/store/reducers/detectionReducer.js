import {
	SEARCH_MEAL_CALORIES,
	CLEAR_MEAL_CALORIES,
	DETECT_IMAGE,
	CLEAR_IMAGE_DETECTION,
} from '../types';

const initialState = {
	mealCaloriesDetectionResponse: null,
	awsImageKey: '',
	awsImageUrl: '',
	detectedImageLabels: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_MEAL_CALORIES:
			return {
				...state,
				mealCaloriesDetectionResponse: action.payload,
			};
		case CLEAR_MEAL_CALORIES:
			return {
				...state,
				mealCaloriesDetectionResponse: null,
			};
		case DETECT_IMAGE:
			return {
				...state,
				awsImageKey: action.payload.awsImageKey,
				awsImageUrl: action.payload.awsImageUrl,
				detectedImageLabels: action.payload.labels,
			};

		case CLEAR_IMAGE_DETECTION:
			return {
				...state,
				awsImageKey: '',
				awsImageUrl: '',
				detectedImageLabels: [],
			};
		default:
			return state;
	}
};
