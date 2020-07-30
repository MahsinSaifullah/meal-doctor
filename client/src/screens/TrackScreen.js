import React, { useState, useEffect } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView,
	Text,
	ImageBackground,
	Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';
import TotalNutrientDisplay from '../components/TotalNutrientDisplay';
import FoodLogDisplay from '../components/FoodLogDisplayCard';
import { setDate, setCurrentMealType } from '../store/actions/mealLogAction';
import {
	searchMealCalories,
	clearMealCalories,
	detectImage,
	clearImageDetection,
} from '../store/actions/detectionAction';
import { loadUser } from '../store/actions/authAction';
import Loading from '../components/Loading';
import SearchTypeModal from '../components/SearchTypeModal';
import ManualSearchInputModal from '../components/ManualSearchInputModal';
import VisionSearchModal from '../components/VisionSearchModal';

const TrackScreen = ({ navigation }) => {
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
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
		//loads user from backend once the screen loads
		const bootstrapAsync = async () => {
			await dispatch(loadUser(token));
		};

		bootstrapAsync();
	}, []);

	//handles the cancel button press on date picker modal
	const handleCancelDatePicker = () => {
		setShowDatePicker(false);
	};

	//handles selected date on date picker modal
	const handleConfirmDate = (date) => {
		setShowDatePicker(false);

		//set current date in meal log reducer
		dispatch(setDate(date));
	};

	// handle meal add button press
	const handleMealAdd = (mealType) => {
		//set current meal type in meal log reducer
		dispatch(setCurrentMealType(mealType));
		toggleModal();
	};

	// toggles the modal in track screen
	const toggleModal = () => {
		setIsSearchTypeModalOpen(!isSearchTypeModalOpen);
		setModalType('manualOrVision');
	};

	// handles manual search button press on  manualOrVision modal
	const handleOnManualSearch = () => {
		setModalType('manualSearch');
	};

	// handles vision search button press on manualOrVision modal
	const handleOnVisionSearch = () => {
		setModalType('visionSearch');
	};

	// handles search button press on manualSearch modal
	const handleOnMealSearch = (mealName) => {
		if (!mealName) return;
		// clear meal calorie response in detection reducer
		dispatch(clearMealCalories());

		// add meal calorie response in detection reducer
		dispatch(searchMealCalories(mealName));
		toggleModal();
		navigation.navigate('Detected Meal', { mealName: mealName });
	};

	// get user permission to use Native features
	const getPermissionAsync = async () => {
		const { status } = await Permissions.askAsync(
			Permissions.CAMERA,
			Permissions.CAMERA_ROLL
		);

		if (status !== 'granted') {
			Alert.alert(
				'Sorry!!',
				'we need camera roll permissions to make this work!',
				[
					{
						text: 'OK',
						onPress: () => {},
					},
				]
			);

			return false;
		}

		return true;
	};

	// handles take a photo button, redirect to native camera
	const handleOnPhoto = async () => {
		const hasPermission = await getPermissionAsync();

		if (!hasPermission) {
			toggleModal();
			return;
		}
		const image = await ImagePicker.launchCameraAsync({
			aspect: [16, 9],
			quality: 0.5,
		});

		// after user takes a photo
		if (!image.cancelled) {
			dispatch(clearImageDetection());
			toggleModal();
			dispatch(detectImage(image));
			navigation.navigate('Image Detect');
		}
	};

	// handles camera roll button, redirect to camera roll
	const handleOnCameraRoll = async () => {
		const hasPermission = await getPermissionAsync();

		if (!hasPermission) {
			toggleModal();
			return;
		}

		const image = await ImagePicker.launchImageLibraryAsync({
			aspect: [16, 9],
			quality: 0.5,
		});

		//after user selects a photo from camera roll
		if (!image.cancelled) {
			dispatch(clearImageDetection());
			toggleModal();
			dispatch(detectImage(image));
			navigation.navigate('Image Detect');
		}
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
						) : modalType === 'manualSearch' ? (
							<ManualSearchInputModal
								onCancel={toggleModal}
								onSearch={handleOnMealSearch}
							/>
						) : (
							<VisionSearchModal
								onPhoto={handleOnPhoto}
								onCameraRoll={handleOnCameraRoll}
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
		return <Loading prompt='LOADING' />;
	}
};

export default TrackScreen;
