import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import Landing from './LandingStackNavigator';
import { setToken } from '../store/actions/authAction';
import DrawerNavigator from '../navigation/DrawerNavigator';
import getTokenFromStorage from '../utility/getTokenFromStorage';
import removeTokenFromStorage from '../utility/removeTokenFromStorage';

const Stack = createStackNavigator();

const LandingStackNavigator = (props) => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		//checks for token in the async storage for authentication
		const bootstrapAsync = async () => {
			let tokenFromStorage;
			try {
				tokenFromStorage = await getTokenFromStorage();
			} catch (error) {
				console.log(error.message);
			}
			dispatch(setToken(tokenFromStorage));
		};

		bootstrapAsync();
	}, []);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{token ? (
				<Stack.Screen name='Home' component={DrawerNavigator} />
			) : (
				<Stack.Screen name='Landing' component={Landing} />
			)}
		</Stack.Navigator>
	);
};

export default LandingStackNavigator;
