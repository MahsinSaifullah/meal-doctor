import React from 'react';
import { View, Text } from 'react-native';
import {} from 'native-base';

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
			<View style={styles.totalNutrientCardContainer}>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Carb</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>20%</Text>
						<Text style={styles.nutrientGram}>10g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Protein</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>20%</Text>
						<Text style={styles.nutrientGram}>10g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Fat</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>20%</Text>
						<Text style={styles.nutrientGram}>10g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Fiber</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>20%</Text>
						<Text style={styles.nutrientGram}>10g</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TotalNutrientDisplay;
