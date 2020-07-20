import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen name='Home' component={BottomTabNavigator} />
			<Drawer.Screen name='About' component={AboutScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
