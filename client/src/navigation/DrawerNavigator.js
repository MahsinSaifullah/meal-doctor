import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import AboutStackNavigator from './AboutStackNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Home'
			drawerContent={(props) => <CustomDrawer {...props} />}
		>
			<Drawer.Screen name='Home' component={BottomTabNavigator} />
			<Drawer.Screen name='About' component={AboutStackNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
