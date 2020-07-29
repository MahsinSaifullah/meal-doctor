import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { useSelector } from 'react-redux';

import styles from '../styles/screen/DetectedMealScreenStyles';
import Loading from '../components/Loading';

const DetectedMealScreen = () => {
	const detectedMealList = useSelector(
		(state) => state.detection.mealCaloriesDetectionResponse
	);
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				{detectedMealList ? (
					detectedMealList.allPossibleFood.length > 0 ? (
						<View>
							<Text>Meal: {detectedMealList.allPossibleFood[0].mealName}</Text>
							<Text>
								Calories: {detectedMealList.allPossibleFood[0].caloriePer100}{' '}
								kcal
							</Text>
						</View>
					) : (
						<Text>No meal was Found</Text>
					)
				) : (
					<Loading />
				)}
			</Content>
		</Container>
	);
};

export default DetectedMealScreen;
