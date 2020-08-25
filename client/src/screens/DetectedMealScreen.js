import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import styles from '../styles/screen/DetectedMealScreenStyles';
import Loading from '../components/Loading';
import DetectedMealCard from '../components/DetectedMealCard';
import { ScrollView } from 'react-native-gesture-handler';
import MealNotFound from '../components/MealNotFound';
import Colors from '../constants/Colors';
import MindfulEatingPromptModal from '../components/MindfulEatingPromptModal';
import MeasurementTypeModal from '../components/MeasurementTypeModal';
import QuantityPromptModal from '../components/QuantityPromptModal';
import {
	selectMeal,
	clearSelectedMeal,
	addMeasuringUnit,
	addMeasuringQuantity,
	searchFoodLog,
	clearImageDetection,
} from '../store/actions/detectionAction';
import { addFoodLog, clearMindfulness } from '../store/actions/mealLogAction';

const DetectedMealScreen = ({ navigation }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState('measurement');
	const detectedMealList = useSelector(
		(state) => state.detection.mealCaloriesDetectionResponse
	);

	const chosenMeal = useSelector((state) => state.detection.selectedMeal);

	const selectedMeasuringUrl = useSelector(
		(state) => state.detection.selectedMeasuringUrl
	);
	const selectedMeasuringUnit = useSelector(
		(state) => state.detection.selectedMeasuringUnit
	);

	const chosenFoodLog = useSelector(
		(state) => state.detection.foodLogDetectionResponse
	);

	const chosenMealType = useSelector((state) => state.mealLog.currentMealType);
	const mindfulness = useSelector((state) => state.mealLog.mindfulness);
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
	const awsImageUrl = useSelector((state) => state.detection.awsImageUrl);
	const awsImageKey = useSelector((state) => state.detection.awsImageKey);

	const dispatch = useDispatch();

	// handle selection of meal
	const onMealSelect = (mealId) => {
		dispatch(clearSelectedMeal());

		const selectedMeal = detectedMealList.allPossibleFood.find(
			(meal) => meal.edamamFoodId === mealId
		);

		dispatch(selectMeal(selectedMeal));
		toggleModal();
	};

	// toggles the modal in track screen
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
		setModalType('measurement');
	};

	//handle measuring unit selection
	const onMeasuringUnitSelect = (unit) => {
		dispatch(addMeasuringUnit(unit));
		setModalType('quantity');
	};

	//handle quantity confirmation
	const onQuantitySelect = (quantity) => {
		dispatch(addMeasuringQuantity(Number(quantity)));

		const data = {
			mealName: chosenMeal.mealName,
			edamamFoodId: chosenMeal.edamamFoodId,
			edamamMeasuringUrl: selectedMeasuringUrl,
			measuringUnit: selectedMeasuringUnit,
			mealQuantity: Number(quantity),
		};

		dispatch(searchFoodLog(data));
		setModalType('mindful');
	};

	//handle skipping of mindful experience
	const handleOnSkip = () => {
		dispatch(clearMindfulness());
		toggleModal();

		const data = {
			mealName: chosenFoodLog.mealName,
			edamamFoodId: chosenFoodLog.edamamFoodId,
			edamamMeasuringUrl: chosenFoodLog.edamamMeasuringUrl,
			measuringUnit: chosenFoodLog.measuringUnit,
			mealQuantity: chosenFoodLog.mealQuantity,
			mealType: chosenMealType,
			awsImageURL: awsImageUrl,
			awsImageKey: awsImageKey,
			mindfulness: 0,
			calorie: chosenFoodLog.calorie,
			protein: chosenFoodLog.protein,
			carb: chosenFoodLog.carb,
			fat: chosenFoodLog.fat,
			satFat: chosenFoodLog.satFat,
			fiber: chosenFoodLog.fiber,
			salt: chosenFoodLog.salt,
			cholestrol: chosenFoodLog.cholestrol,
			proteinParcentage: chosenFoodLog.proteinParcentage,
			carbParcentage: chosenFoodLog.carbParcentage,
			fatParcentage: chosenFoodLog.fatParcentage,
			satFatParcentage: chosenFoodLog.satFatParcentage,
			fiberParcentage: chosenFoodLog.fiberParcentage,
			saltParcentage: chosenFoodLog.saltParcentage,
			cholestrolParcentage: chosenFoodLog.cholestrolParcentage,
			isHealthy: chosenFoodLog.isHealthy,
			dietLabels: chosenFoodLog.dietLabels,
			healthLabels: chosenFoodLog.healthLabels,
			date: chosenDate,
		};

		dispatch(addFoodLog(data));
		dispatch(clearImageDetection());
		navigation.navigate('Track');
	};

	const handleOnYes = () => {
		toggleModal();
		navigation.navigate('Mindful Eating');
	};

	if (detectedMealList) {
		if (detectedMealList.allPossibleFood.length > 0) {
			return (
				<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
					<Modal
						isVisible={isModalOpen}
						onBackdropPress={toggleModal}
						hideModalContentWhileAnimating={true}
						onSwipeComplete={toggleModal}
						swipeThreshold={20}
						swipeDirection='down'
					>
						{modalType === 'measurement' ? (
							<MeasurementTypeModal
								onMeasuringUnitSelect={onMeasuringUnitSelect}
							/>
						) : modalType === 'quantity' ? (
							<QuantityPromptModal
								onCancel={toggleModal}
								onConfirm={onQuantitySelect}
							/>
						) : (
							<MindfulEatingPromptModal
								onSkip={handleOnSkip}
								onYes={handleOnYes}
							/>
						)}
					</Modal>
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
										onMealSelect={onMealSelect}
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
