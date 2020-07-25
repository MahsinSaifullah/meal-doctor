import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const LandingStackNavigator = (props) => {
	return (
		<Stack.Navigator
			initialRouteName='Landing'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='Landing' component={LandingScreen} />
			<Stack.Screen name='Register' component={RegisterScreen} />
			<Stack.Screen name='Login' component={LoginScreen} />
		</Stack.Navigator>
	);
};

export default LandingStackNavigator;
