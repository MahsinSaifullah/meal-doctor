import { combineReducers } from 'redux';
import mealLogReducer from './mealLogReducer';
import authReducer from './authReducer';
import detectionReducer from './detectionReducer';

export default combineReducers({
	mealLog: mealLogReducer,
	auth: authReducer,
	detection: detectionReducer,
});
