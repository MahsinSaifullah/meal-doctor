import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';
import TotalNutrientDisplay from '../components/TotalNutrientDisplay';

const TrackScreen = () => {
	const dailyStat = useSelector((state) => state.mealLog.dailyState);
	const user = useSelector((state) => state.auth.user);
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<View style={styles.dateDisplayContainer}>
					<TouchableOpacity>
						<Ionicons name='md-calendar' size={20} color={Colors.primary} />
					</TouchableOpacity>
					<View style={styles.dateTextContainer}>
						<Text style={styles.dateText}>21 Jul 2020</Text>
					</View>
				</View>
				<View style={styles.nutrientDisplayContainer}>
					<TotalNutrientDisplay
						totalCalories={dailyStat[0].totalCalories}
						goalCalories={user.goalCalories}
					/>
				</View>
			</Content>
		</Container>
	);
};

export default TrackScreen;
