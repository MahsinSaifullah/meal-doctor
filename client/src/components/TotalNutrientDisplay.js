import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

import styles from '../styles/component/TotalNutrientDisplayStyles';

const TotalNutrientDisplay = ({ totalCalories, goalCalories }) => {
	return (
		<View style={styles.componentContainer}>
			<View style={styles.totalCalorieCardContainer}>
				<View>
					<Text style={styles.totalCalorieValue}>
						{totalCalories}
						<Text style={styles.totalCalorieUnit}>kcal</Text>
					</Text>
				</View>
				<View>
					<Text style={styles.totalCalorieText}>
						<Text style={styles.goalText}>Goal: </Text>
						{goalCalories}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default TotalNutrientDisplay;
