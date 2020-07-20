import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import TrackScreen from '../screens/TrackScreen';
import SelectMealScreen from '../screens/SelectMealScreen';
import DetectedMealScreen from '../screens/DetectedMealScreen';
import MealTimerScreen from '../screens/MealTimerScreen';
import IosHeaderConfig from '../constants/DefaultIOSHeaderConfig';
import AndroidHeaderConfig from '../constants/DefaultAndroidHeaderConfig';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Fonts from '../constants/Fonts';

const Stack = createStackNavigator();

const TrackStackNavigator = (props) => {
	return (
		<Stack.Navigator
			initialRouteName='Track'
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontFamily: Fonts.mainTitleFont,
					fontSize: Fonts.mainTitleFontSize,
				},
			}}
		>
			<Stack.Screen
				name='Track'
				options={({ navigation }) => ({
					headerTitle: IosHeaderConfig.title,
					headerTintColor:
						Platform.OS === 'android'
							? AndroidHeaderConfig.tintColor
							: IosHeaderConfig.tintColor,
					headerStyle: {
						backgroundColor:
							Platform.OS === 'android'
								? AndroidHeaderConfig.bgColor
								: IosHeaderConfig.bgColor,
					},
					headerLeft: (props) => (
						<HeaderButtons
							{...props}
							HeaderButtonComponent={CustomHeaderButton}
						>
							<Item
								title='Drawer'
								iconName='ios-menu'
								onPress={() => {
									navigation.toggleDrawer();
								}}
							/>
						</HeaderButtons>
					),
				})}
				component={TrackScreen}
			/>
			<Stack.Screen name='Detected Meal' component={DetectedMealScreen} />
			<Stack.Screen name='Select Meal' component={SelectMealScreen} />
			<Stack.Screen name='Meal Timer' component={MealTimerScreen} />
		</Stack.Navigator>
	);
};

export default TrackStackNavigator;
