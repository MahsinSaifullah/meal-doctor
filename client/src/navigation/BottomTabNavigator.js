import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import TrackStackNavigator from './TrackStackNavigator';
import ProgressStackNavigator from './ProgressStackNavigator';
import MealsScreen from '../screens/MealsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';
const Tab = createMaterialBottomTabNavigator();

const MealTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Track'
			activeColor={Colors.bgWhite}
			shifting={true}
		>
			<Tab.Screen
				name='Track'
				options={{
					tabBarIcon: ({ color }) => {
						return <Ionicons name='ios-restaurant' size={25} color={color} />;
					},
					tabBarColor: Colors.primary,
				}}
				component={TrackStackNavigator}
			/>

			<Tab.Screen
				name='Profile'
				options={{
					tabBarIcon: ({ color }) => {
						return <FontAwesome name='user' size={25} color={color} />;
					},
					tabBarColor: Colors.primary,
				}}
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
};

export default MealTabNavigator;
