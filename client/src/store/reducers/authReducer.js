import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	SET_TOKEN,
} from '../types';

const initialState = {
	token: null,
	isAuthenticated: false,
	user: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				isAuthenticated: true,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
