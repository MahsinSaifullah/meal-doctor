import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

import styles from '../styles/screen/MindfulEatingScreenStyles';
import Colors from '../constants/Colors';
import calculateMindfulness from '../utility/calculateMindfulness';
import { setMindfulness, addFoodLog } from '../store/actions/mealLogAction';
import { clearImageDetection } from '../store/actions/detectionAction';
import Player from '../utility/Player';

const MindfulEatingScreen = ({ navigation }) => {
	const [displayItem, setDisplayItem] = useState('start');
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	const chosenMealType = useSelector((state) => state.mealLog.currentMealType);
	const mindfulness = useSelector((state) => state.mealLog.mindfulness);
	const chosenDate = useSelector((state) => state.mealLog.chosenDate);
	const awsImageUrl = useSelector((state) => state.detection.awsImageUrl);
	const awsImageKey = useSelector((state) => state.detection.awsImageKey);
	const chosenFoodLog = useSelector(
		(state) => state.detection.foodLogDetectionResponse
	);

	const dispatch = useDispatch();

	const onStart = async () => {
		Player.playSound('track1');
		setStartTime(Date.now());
		setDisplayItem('step1');
	};

	const onMoveOn = async () => {
		Player.stopSound('track1');
		Player.playSound('track2');
		setDisplayItem('step2');
	};

	const onNext = async () => {
		Player.stopSound('track2');
		Player.playSound('track3');
		setDisplayItem('step3');
	};

	const onContinue = async () => {
		Player.stopSound('track3');
		Player.playSound('track4');
		setDisplayItem('step4');
	};

	const onWrapUp = async () => {
		Player.stopSound('track4');
		setDisplayItem('end');
	};

	const onRepeat = async () => {
		setDisplayItem('step2');
		Player.playSound('track2');
	};

	const onFinish = async () => {
		setEndTime(Date.now());
		const mindfulnessScore = calculateMindfulness(startTime, Date.now(), 10);

		dispatch(setMindfulness(mindfulnessScore));

		const data = {
			mealName: chosenFoodLog.mealName,
			edamamFoodId: chosenFoodLog.edamamFoodId,
			edamamMeasuringUrl: chosenFoodLog.edamamMeasuringUrl,
			measuringUnit: chosenFoodLog.measuringUnit,
			mealQuantity: chosenFoodLog.mealQuantity,
			mealType: chosenMealType,
			awsImageURL: awsImageUrl,
			awsImageKey: awsImageKey,
			mindfulness: mindfulnessScore,
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

	useEffect(() => {
		const bootstrapAsync = async () => {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true,
			});
		};
		Player.stopSound('track1');
		Player.stopSound('track2');
		Player.stopSound('track3');
		Player.stopSound('track4');

		bootstrapAsync();
	}, []);

	useFocusEffect(() => {
		return () => {
			if (displayItem === 'start') {
				Player.stopSound('track2');
				Player.stopSound('track3');
				Player.stopSound('track4');
			} else if (displayItem === 'step1') {
				Player.stopSound('track1');
				Player.stopSound('track3');
				Player.stopSound('track4');
			} else if (displayItem === 'step2') {
				Player.stopSound('track1');
				Player.stopSound('track2');
				Player.stopSound('track4');
			} else if (displayItem === 'step3') {
				Player.stopSound('track1');
				Player.stopSound('track2');
				Player.stopSound('track3');
			} else {
				Player.stopSound('track3');
				Player.stopSound('track4');
			}
		};
	}, []);

	if (displayItem === 'start')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.promptTitleText}>Sit up straight</Text>
					<Text style={styles.promptSubtitleText}>Press start to begin</Text>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Start'
						type='solid'
						raised={true}
						onPress={onStart}
					/>
				</Animatable.View>
			</View>
		);
	else if (displayItem === 'step1')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.step1TitleText}>Before we get to the food</Text>
					<Text style={styles.step1SecondaryTitleText}>
						Lets Get you in the mood
					</Text>
					<Text style={styles.step1emoji}>😊</Text>
					<View style={styles.step1SubtitleTextContainer}>
						<Text style={styles.step1SubtitleText}>
							The Mindfulness Clock has started Ticking
						</Text>
						<Text style={styles.step1SubtitleText}>
							So take your time, follow the steps
						</Text>
						<Text style={styles.step1SubtitleText}>
							Only move on when you are ready
						</Text>
					</View>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Move on'
						type='solid'
						raised={true}
						onPress={onMoveOn}
					/>
				</Animatable.View>
			</View>
		);
	else if (displayItem === 'step2')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.step1TitleText}>Are you Ready to Eat?</Text>
					<Text style={styles.step1SecondaryTitleText}>
						Let us explore the food with our senses
					</Text>
					<Text style={styles.step1emoji}>😋</Text>
					<View style={styles.step1SubtitleTextContainer}>
						<Text style={styles.step1SubtitleText}>
							Why don't you pick up the food?
						</Text>
						<Text style={styles.step1SubtitleText}>
							What does it feel like?
						</Text>
						<Text style={styles.step1SubtitleText}>
							Observe its shape, texture and color
						</Text>
						<Text style={styles.step1SubtitleText}>
							No rush, click next when you are ready.
						</Text>
					</View>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Next'
						type='solid'
						raised={true}
						onPress={onNext}
					/>
				</Animatable.View>
			</View>
		);
	else if (displayItem === 'step3')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.step1TitleText}>You are doing Great!!!</Text>
					<Text style={styles.step1SecondaryTitleText}>
						Lets Get your other senses into This
					</Text>
					<Text style={styles.step1emoji}>🤤</Text>
					<View style={styles.step1SubtitleTextContainer}>
						<Text style={styles.step1SubtitleText}>
							What kind of Aroma does your food have?
						</Text>
						<Text style={styles.step1SubtitleText}>
							How does the aroma make you feel?
						</Text>
						<Text style={styles.step1SubtitleText}>
							We are almost there, lets Continue
						</Text>
					</View>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Continue'
						type='solid'
						raised={true}
						onPress={onContinue}
					/>
				</Animatable.View>
			</View>
		);
	else if (displayItem === 'step4')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.step1TitleText}>
						Place the Food in you mouth!!!
					</Text>
					<Text style={styles.step1SecondaryTitleText}>
						Slowly chew and Savour the food
					</Text>
					<Text style={styles.step1emoji}>😍</Text>
					<View style={styles.step1SubtitleTextContainer}>
						<Text style={styles.step1SubtitleText}>
							Let the flavours burst in your mouth
						</Text>
						<Text style={styles.step1SubtitleText}>How does it taste?</Text>
						<Text style={styles.step1SubtitleText}>
							How is it making you feel?
						</Text>
					</View>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Wrap up'
						type='solid'
						raised={true}
						onPress={onWrapUp}
					/>
				</Animatable.View>
			</View>
		);
	else if (displayItem === 'end')
		return (
			<View style={styles.screenContent}>
				<Animatable.View
					animation='fadeInDown'
					style={styles.promptTextContainer}
				>
					<Text style={styles.step1TitleText}>Congrats !!!</Text>
					<Text style={styles.step1SecondaryTitleText}>
						You took a Mindful bite
					</Text>
					<Text style={styles.step1emoji}>🤗</Text>
					<View style={styles.step1SubtitleTextContainer}>
						<Text style={styles.step1SubtitleText}>
							Repeat the process for rest of the food
						</Text>
						<Text style={styles.step1SubtitleText}>
							When you are done with your food
						</Text>
						<Text style={styles.step1SubtitleText}>Press Finish</Text>
					</View>
				</Animatable.View>

				<Animatable.View
					animation='fadeInUp'
					style={styles.startButtonContainer}
				>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={{
							...styles.button,
							backgroundColor: Colors.trafficYellow,
						}}
						title='Repeat'
						type='solid'
						raised={true}
						onPress={onRepeat}
					/>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={{
							...styles.button,
							backgroundColor: Colors.accent,
						}}
						title='Finish'
						type='solid'
						raised={true}
						onPress={onFinish}
					/>
				</Animatable.View>
			</View>
		);
};

export default MindfulEatingScreen;
