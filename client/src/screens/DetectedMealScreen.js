import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/screen/DetectedMealScreenStyles';
import Loading from '../components/Loading';
import DetectedMealCard from '../components/DetectedMealCard';
import { ScrollView } from 'react-native-gesture-handler';
import MealNotFound from '../components/MealNotFound';
import Colors from '../constants/Colors';

const DetectedMealScreen = () => {
	const detectedMealList = useSelector(
		(state) => state.detection.mealCaloriesDetectionResponse
	);

	if (detectedMealList) {
		if (detectedMealList.allPossibleFood.length > 0) {
			return (
				<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
					<View style={styles.screenContainer}>
						<Animatable.View style={styles.titleContainer} animation='fadeIn'>
							<Text style={styles.titleText}>Pick the Correct Meal</Text>
							<Feather
								name='chevrons-down'
								size={30}
								color={Colors.accentLight}
							/>
						</Animatable.View>
						<Animatable.View
							style={styles.mealCardsContainer}
							animation='fadeInDownBig'
						>
							{detectedMealList.allPossibleFood.map((meal, i) => {
								return (
									<DetectedMealCard
										key={i}
										id={meal.edamamFoodId}
										imageUrl={meal.edamamImageURL}
										mealName={meal.mealName}
										protein={meal.proteinPer100}
										carb={meal.carbPer100}
										fat={meal.fatPer100}
										fiber={meal.fiberPer100}
										calories={meal.caloriePer100}
									/>
								);
							})}
						</Animatable.View>
					</View>
				</ScrollView>
			);
		} else {
			return <MealNotFound />;
		}
	} else {
		return <Loading prompt='ANALYZING' />;
	}
};

export default DetectedMealScreen;
