import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { useSelector } from 'react-redux';
import moment from 'moment';

import styles from '../styles/component/FoodLogDisplayCardStyles';
import FoodLogItem from './FoodLogItem';

const FoodLogDisplayCard = ({ mealType, onAdd, onLongPress }) => {
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
	const displayedFoodLogs = useSelector((state) =>
		state.mealLog.foodLogs.filter((foodLog) => {
			const isDateMatch = moment(foodLog.date).isSame(
				moment(chosenDate),
				'day'
			);

			const isMealTypeMatch = foodLog.mealType === mealType;

			return isMealTypeMatch && isDateMatch;
		})
	);

	return (
		<View style={styles.componentContainer}>
			<View style={styles.componentHeaderContainer}>
				<View style={styles.mealTypeHeaderContainer}>
					<Text style={styles.mealTypeHeaderText}>{mealType}</Text>
				</View>
				<View>
					<Button
						rounded
						style={styles.addMealButton}
						onPress={() => onAdd(mealType)}
					>
						<Text style={styles.addMealButtonText}>+</Text>
					</Button>
				</View>
			</View>
			<View style={styles.foodLogContainer}>
				{displayedFoodLogs.map((foodLog) => {
					return (
						<FoodLogItem
							key={foodLog.edamamFoodId}
							id={foodLog._id}
							mealUri={
								foodLog.awsImageURL
									? foodLog.awsImageURL
									: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-savouring-delicious-food.png'
							}
							mealName={foodLog.mealName}
							mealQuantity={foodLog.mealQuantity}
							mealMeasureUnit={foodLog.measuringUnit}
							mealTime={foodLog.mindfulness ? foodLog.mindfulness : 0}
							mealCalories={foodLog.calorie.toFixed(0)}
							fatParcentage={foodLog.fatParcentage.toFixed(0)}
							satFatParcentage={foodLog.satFatParcentage.toFixed(0)}
							saltParcentage={foodLog.saltParcentage.toFixed(0)}
							onLongPress={onLongPress}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default FoodLogDisplayCard;
