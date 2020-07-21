import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Asset } from 'expo-asset';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import store from './src/store/store';

const fetchFonts = async () => {
	await Asset.loadAsync([require('./assets/bgImage.jpg')]);
	return Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
		Amatic_regular: require('./assets/fonts/AmaticSC-Regular.ttf'),
		Amatic_bold: require('./assets/fonts/AmaticSC-Bold.ttf'),
		PTSans_bold: require('./assets/fonts/PTSansNarrow-Bold.ttf'),
		PTSans_regular: require('./assets/fonts/PTSansNarrow-Regular.ttf'),
		OpenSans_regular: require('./assets/fonts/OpenSans-Regular.ttf'),
	});
};

export default function App() {
	const [dataloaded, setDataloaded] = useState(false);

	if (!dataloaded)
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataloaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	return (
		<Provider store={store}>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({});
