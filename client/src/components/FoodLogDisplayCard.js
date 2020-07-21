import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

import styles from '../styles/component/FoodLogDisplayCardStyles';

const FoodLogDisplayCard = ({ mealType }) => {
	return (
		<View style={styles.componentContainer}>
			<View style={styles.componentHeaderContainer}>
				<View style={styles.mealTypeHeaderContainer}>
					<Text style={styles.mealTypeHeaderText}>{mealType}</Text>
				</View>
				<View>
					<Button rounded style={styles.addMealButton}>
						<Text style={styles.addMealButtonText}>+</Text>
					</Button>
				</View>
			</View>
			<View style={styles.foodLogContainer}>
				<Text>food logs</Text>
			</View>
		</View>
	);
};

export default FoodLogDisplayCard;
