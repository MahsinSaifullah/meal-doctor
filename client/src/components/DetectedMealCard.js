import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles/component/DetectedMealCardStyles';

const DetectedMealCard = ({
	id,
	imageUrl,
	mealName,
	protein,
	carb,
	fat,
	fiber,
	calories,
	onMealSelect,
}) => {
	return (
		<View style={styles.componentContent}>
			<TouchableOpacity onPress={() => onMealSelect(id)}>
				<View style={styles.mealTitleContainer}>
					<Text style={styles.mealTitleText}>{mealName}</Text>
				</View>
				<View style={styles.mealDetailsContainer}>
					<Text style={styles.mealDetailsText}>
						Protein:{' '}
						<Text style={styles.mealDetailsValueText}>
							{protein ? protein.toFixed(0) : 0}g
						</Text>
					</Text>
					<Text style={styles.mealDetailsText}>
						Carb:{' '}
						<Text style={styles.mealDetailsValueText}>
							{carb ? carb.toFixed(0) : 0}g
						</Text>
					</Text>
					<Text style={styles.mealDetailsText}>
						Fat:{' '}
						<Text style={styles.mealDetailsValueText}>
							{fat ? fat.toFixed(0) : 0}g
						</Text>
					</Text>
					<Text style={styles.mealDetailsText}>
						Fiber:{' '}
						<Text style={styles.mealDetailsValueText}>
							{fiber ? fiber.toFixed(0) : 0}g
						</Text>
					</Text>
					<Text style={styles.mealDetailsText}>
						Calories:{' '}
						<Text style={styles.mealDetailsValueText}>
							{calories ? calories.toFixed(0) : 0}kcal
						</Text>
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default DetectedMealCard;
