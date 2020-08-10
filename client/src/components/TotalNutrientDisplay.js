import React from 'react';
import { View, Text } from 'react-native';
import {} from 'native-base';

import styles from '../styles/component/TotalNutrientDisplayStyles';

const TotalNutrientDisplay = ({
	totalCalories,
	goalCalories,
	carb,
	carbParcentage,
	protein,
	proteinParcentage,
	fat,
	fatParcentage,
	fiber,
	fiberParcentage,
}) => {
	return (
		<View style={styles.componentContainer}>
			<View style={styles.totalCalorieCardContainer}>
				<View>
					<Text style={styles.totalCalorieValue}>
						{totalCalories.toFixed(0)}
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
						<Text style={styles.nutrientParcentage}>{carbParcentage}%</Text>
						<Text style={styles.nutrientGram}>{carb.toFixed(1)}g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Protein</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>{proteinParcentage}%</Text>
						<Text style={styles.nutrientGram}>{protein.toFixed(1)}g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Fat</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>{fatParcentage}%</Text>
						<Text style={styles.nutrientGram}>{fat.toFixed(1)}g</Text>
					</View>
				</View>
				<View style={styles.totalNutrientValueContainer}>
					<View>
						<Text style={styles.nutrientText}>Fiber</Text>
					</View>
					<View style={styles.totalNutrientParcentageContainer}>
						<Text style={styles.nutrientParcentage}>{fiberParcentage}%</Text>
						<Text style={styles.nutrientGram}>{fiber.toFixed(1)}g</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TotalNutrientDisplay;
