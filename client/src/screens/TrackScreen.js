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
	const [showDatePicker, setShowDatePicker] = useState(false);
	const dailyStat = useSelector((state) => state.mealLog.dailyState);
	const user = useSelector((state) => state.auth.user);
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);

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
