import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { useSelector } from 'react-redux';

import styles from '../styles/component/FoodLogDisplayCardStyles';
import FoodLogItem from './FoodLogItem';

const FoodLogDisplayCard = ({ mealType }) => {
	const displayedFoodLogs = useSelector((state) =>
		state.mealLog.displayedFoodLogs.filter(
			(foodLog) => foodLog.mealType === mealType
		)
	);
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
				{displayedFoodLogs.map((foodLog) => {
					return (
						<FoodLogItem
							key={foodLog.edamamFoodId}
							mealUri={
								foodLog.awsImageURL
									? foodLog.awsImageURL
									: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-savouring-delicious-food.png'
							}
							mealName={foodLog.mealName}
							mealQuantity={foodLog.mealQuantity}
							mealMeasureUnit={foodLog.measuringUnit}
							mealTime={
								foodLog.timeToFinishMeal ? foodLog.timeToFinishMeal : '---'
							}
							mealCalories={foodLog.calorie}
							fatParcentage={foodLog.fatParcentage}
							satFatParcentage={foodLog.satFatParcentage}
							saltParcentage={foodLog.saltParcentage}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default FoodLogDisplayCard;
