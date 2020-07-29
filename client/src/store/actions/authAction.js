import axios from 'axios';

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
import getTokenFromStorage from '../../utility/getTokenFromStorage';
import removeTokenFromStorage from '../../utility/removeTokenFromStorage';
import setTokenToStorage from '../../utility/setTokenToStorage';
import setAuthToken from '../../utility/setAuthToken';
import ServerURL from '../../constants/ServerURL';

// set token
export const setToken = (token) => {
	return {
		type: SET_TOKEN,
		payload: token,
	};
};

// load user
export const loadUser = (token) => async (dispatch) => {
	if (token) {
		setAuthToken(token);
	}

	try {
		const res = await axios.get(`${ServerURL.devServer}/api/auth`);
		dispatch({ type: USER_LOADED, payload: res.data });
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: error.response.data.msg });
		removeTokenFromStorage();
		throw new Error(error.response.data.msg);
	}
};

// Register User
export const register = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/users`,
			formData,
			config
		);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		setTokenToStorage(res.data.token);
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error.response.data.msg,
		});
		removeTokenFromStorage();
		throw new Error(error.response.data.msg);
	}
};

// Login User
export const login = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(
			`${ServerURL.devServer}/api/auth`,
			formData,
			config
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		setTokenToStorage(res.data.token);
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.msg,
		});
		removeTokenFromStorage();
		throw new Error(error.response.data.msg);
	}
};

// logout
export const logout = async () => {
	removeTokenFromStorage();
	return {
		type: LOGOUT,
	};
};

// clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
