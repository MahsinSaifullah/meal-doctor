import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';
import TotalNutrientDisplay from '../components/TotalNutrientDisplay';
import FoodLogDisplay from '../components/FoodLogDisplayCard';
import { setDate } from '../store/actions/mealLogAction';

const TrackScreen = () => {
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const dailyStat = useSelector((state) =>
		state.mealLog.dailyStats.find((dailyStat) => {
			const isDateMatch = moment(dailyStat.date).isSame(
				moment(chosenDate),
				'date'
			);

			return isDateMatch;
		})
	);

	const user = useSelector((state) => state.auth.user);

	const dispatch = useDispatch();

	const handleCancelDatePicker = () => {
		setShowDatePicker(false);
	};

	const handleConfirmDate = (date) => {
		setShowDatePicker(false);
		dispatch(setDate(date));
	};

	return (
		<View style={styles.screenContent}>
			<ImageBackground
				source={require('../../assets/bgImage.jpg')}
				style={{ width: '100%', height: '100%' }}
			>
				<ScrollView>
					<View style={styles.dateDisplayContainer}>
						<TouchableOpacity
							onPress={() => setShowDatePicker(true)}
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Ionicons name='md-calendar' size={23} color={Colors.accent} />
							<View style={styles.dateTextContainer}>
								<Text style={styles.dateText}>
									{moment(chosenDate).format('DD MMMM YYYY')}
								</Text>
								<DateTimePickerModal
									isVisible={showDatePicker}
									mode='date'
									onCancel={handleCancelDatePicker}
									onConfirm={handleConfirmDate}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.nutrientDisplayContainer}>
						<TotalNutrientDisplay
							totalCalories={!dailyStat ? 0 : dailyStat.totalCalories}
							goalCalories={user.goalCalories}
							carb={!dailyStat ? 0 : dailyStat.totalCarb}
							carbParcentage={!dailyStat ? 0 : dailyStat.totalCarbParcentage}
							protein={!dailyStat ? 0 : dailyStat.totalProtein}
							proteinParcentage={
								!dailyStat ? 0 : dailyStat.totalProteinParcentage
							}
							fat={!dailyStat ? 0 : dailyStat.totalFat}
							fatParcentage={!dailyStat ? 0 : dailyStat.totalFatParcentage}
							fiber={!dailyStat ? 0 : dailyStat.totalFiber}
							fiberParcentage={!dailyStat ? 0 : dailyStat.totalFiberParcentage}
						/>
					</View>
					<View style={styles.foodLogDisplayContainer}>
						<FoodLogDisplay mealType='breakfast' />
						<FoodLogDisplay mealType='lunch' />
						<FoodLogDisplay mealType='dinner' />
						<FoodLogDisplay mealType='snacks' />
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

export default TrackScreen;
