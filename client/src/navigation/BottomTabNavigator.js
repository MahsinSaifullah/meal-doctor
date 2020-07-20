import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TrackStackNavigator from './TrackStackNavigator';
import ProgressStackNavigator from './ProgressStackNavigator';
import MealsScreen from '../screens/MealsScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const MealTabNavigator = () => {
	return (
		<Tab.Navigator initialRouteName='Track'>
			<Tab.Screen name='Track' component={TrackStackNavigator} />
			<Tab.Screen name='Progress' component={ProgressStackNavigator} />
			<Tab.Screen name='Meals' component={MealsScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default MealTabNavigator;
