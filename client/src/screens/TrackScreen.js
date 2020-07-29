import React, { useState, useEffect } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView,
	Text,
	ImageBackground,
	Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modal';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';
import TotalNutrientDisplay from '../components/TotalNutrientDisplay';
import FoodLogDisplay from '../components/FoodLogDisplayCard';
import { setDate, setCurrentMealType } from '../store/actions/mealLogAction';
import { searchMealCalories } from '../store/actions/detectionAction';
import { loadUser } from '../store/actions/authAction';
import Loading from '../components/Loading';
import SearchTypeModal from '../components/SearchTypeModal';
import ManualSearchInputModal from '../components/ManualSearchInputModal';

const TrackScreen = ({ navigation }) => {
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
	const currentMealType = useSelector((state) => state.mealLog.currentMealType);
	const [modalType, setModalType] = useState('manualOrVision');
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [isSearchTypeModalOpen, setIsSearchTypeModalOpen] = useState(false);
	const dailyStat = useSelector((state) =>
		state.mealLog.dailyStats.find((dailyStat) => {
			const isDateMatch = moment(dailyStat.date, 'DD MMMM YYYY').isSame(
				moment(chosenDate),
				'date'
			);

			return isDateMatch;
		})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const bootstrapAsync = async () => {
			await dispatch(loadUser(token));
		};

		bootstrapAsync();
	}, []);

	const handleCancelDatePicker = () => {
		setShowDatePicker(false);
	};

	const handleConfirmDate = (date) => {
		setShowDatePicker(false);
		dispatch(setDate(date));
	};

	const handleMealAdd = (mealType) => {
		dispatch(setCurrentMealType(mealType));
		toggleModal();
	};

	const toggleModal = () => {
		setIsSearchTypeModalOpen(!isSearchTypeModalOpen);
		setModalType('manualOrVision');
	};

	const handleOnManualSearch = () => {
		setModalType('manualSearch');
	};
	const handleOnVisionSearch = () => {};

	const handleOnMealSearch = (mealName) => {
		dispatch(searchMealCalories(mealName));
		toggleModal();
		navigation.navigate('Detected Meal');
	};

	if (user) {
		return (
			<View style={styles.screenContent}>
				<ImageBackground
					source={require('../../assets/bgImage.jpg')}
					style={{ width: '100%', height: '100%' }}
				>
					<Modal
						isVisible={isSearchTypeModalOpen}
						onBackdropPress={toggleModal}
						hideModalContentWhileAnimating={true}
						onSwipeComplete={toggleModal}
						swipeThreshold={20}
						swipeDirection='down'
					>
						{modalType === 'manualOrVision' ? (
							<SearchTypeModal
								onManualSearch={handleOnManualSearch}
								onVisionSearch={handleOnVisionSearch}
							/>
						) : (
							<ManualSearchInputModal
								onCancel={toggleModal}
								onSearch={handleOnMealSearch}
							/>
						)}
					</Modal>
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
								fiberParcentage={
									!dailyStat ? 0 : dailyStat.totalFiberParcentage
								}
							/>
						</View>
						<View style={styles.foodLogDisplayContainer}>
							<FoodLogDisplay mealType='breakfast' onAdd={handleMealAdd} />
							<FoodLogDisplay mealType='lunch' onAdd={handleMealAdd} />
							<FoodLogDisplay mealType='dinner' onAdd={handleMealAdd} />
							<FoodLogDisplay mealType='snacks' onAdd={handleMealAdd} />
						</View>
					</ScrollView>
				</ImageBackground>
			</View>
		);
	} else {
		return <Loading />;
	}
};

export default TrackScreen;
