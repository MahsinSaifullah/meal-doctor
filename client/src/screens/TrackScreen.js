import React from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';
import TotalNutrientDisplay from '../components/TotalNutrientDisplay';
import FoodLogDisplay from '../components/FoodLogDisplayCard';

const TrackScreen = () => {
	const dailyStat = useSelector((state) => state.mealLog.dailyState);
	const user = useSelector((state) => state.auth.user);
	return (
		<View style={styles.screenContent}>
			<ImageBackground
				source={require('../../assets/bgImage.jpg')}
				style={{ width: '100%', height: '100%' }}
			>
				<ScrollView>
					<View style={styles.dateDisplayContainer}>
						<TouchableOpacity>
							<Ionicons name='md-calendar' size={23} color={Colors.primary} />
						</TouchableOpacity>
						<View style={styles.dateTextContainer}>
							<Text style={styles.dateText}>21 Jul 2020</Text>
						</View>
					</View>
					<View style={styles.nutrientDisplayContainer}>
						<TotalNutrientDisplay
							totalCalories={dailyStat[0].totalCalories}
							goalCalories={user.goalCalories}
							carb={dailyStat[0].totalCarb}
							carbParcentage={dailyStat[0].totalCarbParcentage}
							protein={dailyStat[0].totalProtein}
							proteinParcentage={dailyStat[0].totalProteinParcentage}
							fat={dailyStat[0].totalFat}
							fatParcentage={dailyStat[0].totalFatParcentage}
							fiber={dailyStat[0].totalFiber}
							fiberParcentage={dailyStat[0].totalFiberParcentage}
						/>
					</View>
					<View style={styles.foodLogDisplayContainer}>
						<FoodLogDisplay mealType='Breakfast' />
						<FoodLogDisplay mealType='Lunch' />
						<FoodLogDisplay mealType='Dinner' />
						<FoodLogDisplay mealType='Snacks' />
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

export default TrackScreen;
