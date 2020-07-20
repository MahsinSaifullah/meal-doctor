import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProgressScreen from '../screens/ProgressScreen';

const Stack = createStackNavigator();

const ProgressStackNavigator = (props) => {
	return (
		<Stack.Navigator initialRouteName='Progress'>
			<Stack.Screen
				name='Progress'
				options={{ title: 'Meal Doctor' }}
				component={ProgressScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProgressStackNavigator;
