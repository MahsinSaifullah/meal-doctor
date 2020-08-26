import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AboutScreen from '../screens/AboutScreen';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Fonts from '../constants/Fonts';
import AndroidHeaderConfig from '../constants/DefaultAndroidHeaderConfig';

const Stack = createStackNavigator();

const AboutStackNavigator = (props) => {
	return (
		<Stack.Navigator
			initialRouteName='About'
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontFamily: Fonts.mainTitleFont,
					fontSize: Fonts.mainTitleFontSize,
				},
			}}
		>
			<Stack.Screen
				name='About'
				options={({ navigation }) => ({
					headerTitle: 'About',
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
				component={AboutScreen}
			/>
		</Stack.Navigator>
	);
};

export default AboutStackNavigator;
