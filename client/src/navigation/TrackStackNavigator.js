import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import TrackScreen from '../screens/TrackScreen';
import MindfulEatingScreen from '../screens/MindfulEatingScreen';
import DetectedMealScreen from '../screens/DetectedMealScreen';
import ImageDetectedScreen from '../screens/ImageDetectedScreen';
import IosHeaderConfig from '../constants/DefaultIOSHeaderConfig';
import AndroidHeaderConfig from '../constants/DefaultAndroidHeaderConfig';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

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
					headerTintColor: AndroidHeaderConfig.tintColor,

					headerStyle: {
						backgroundColor: AndroidHeaderConfig.bgColor,
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
			<Stack.Screen
				name='Detected Meal'
				options={({ route }) => ({
					headerTitle: 'Detected Meal',
					headerTintColor: AndroidHeaderConfig.tintColor,

					headerStyle: {
						backgroundColor: AndroidHeaderConfig.bgColor,
					},
				})}
				component={DetectedMealScreen}
			/>
			<Stack.Screen
				name='Image Detect'
				options={{ headerShown: false }}
				component={ImageDetectedScreen}
			/>
			<Stack.Screen
				name='Mindful Eating'
				options={{
					headerStyle: {
						backgroundColor: Colors.primary,
					},
					headerTintColor: Colors.bgWhite,
					headerTransparent: true,
				}}
				component={MindfulEatingScreen}
			/>
		</Stack.Navigator>
	);
};

export default TrackStackNavigator;
