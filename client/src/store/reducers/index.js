import { combineReducers } from 'redux';
import mealLogReducer from './mealLogReducer';
import authReducer from './authReducer';

export default combineReducers({
	mealLog: mealLogReducer,
	auth: authReducer,
});
