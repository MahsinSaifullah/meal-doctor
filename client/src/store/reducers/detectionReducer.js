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

const initialState = {
	mealCaloriesDetectionResponse: null,
	selectedMeal: null,
	selectedMeasuringUrl: '',
	selectedMeasuringUnit: '',
	selectedMeasuringQuantity: 0,
	awsImageKey: '',
	awsImageUrl: '',
	detectedImageLabels: [],
	foodLogDetectionResponse: null,
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
		case SELECT_MEAL:
			return {
				...state,
				selectedMeal: action.payload,
			};
		case CLEAR_SELECT_MEAL:
			return {
				...state,
				selectedMeal: null,
			};
		case ADD_MEASURING_UNIT:
			return {
				...state,
				selectedMeasuringUrl: action.payload.uri,
				selectedMeasuringUnit: action.payload.label,
			};
		case CLEAR_MEASURING_UNIT:
			return {
				...state,
				selectedMeasuringUrl: null,
				selectedMeasuringUnit: null,
			};
		case ADD_MEASURING_QUANTITY:
			return {
				...state,
				selectedMeasuringQuantity: action.payload,
			};
		case CLEAR_MEASURING_QUANTITY:
			return {
				...state,
				selectedMeasuringQuantity: 0,
			};
		case SEARCH_FOODLOG:
			return {
				...state,
				foodLogDetectionResponse: action.payload,
			};
		case CLEAR_FOODLOG_RESPONSE:
			return {
				...state,
				foodLogDetectionResponse: null,
			};
		default:
			return state;
	}
};
