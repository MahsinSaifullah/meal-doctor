import React from 'react';
import { View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/MealNotFoundStyles';

const MealNotFound = () => {
	return (
		<View style={styles.componentContent}>
			<Animatable.Image
				animation='fadeInDown'
				source={require('../../assets/sadEmoji.png')}
				resizeMode='stretch'
			/>
			<Animatable.View animation='fadeInDown' style={styles.titleTextContainer}>
				<Text style={styles.titleText}>MEAL NOT FOUND</Text>
			</Animatable.View>
		</View>
	);
};

export default MealNotFound;
