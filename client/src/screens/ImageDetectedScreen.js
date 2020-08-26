import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';

import styles from '../styles/screen/ImageDetectedScreenStyle';
import Colors from '../constants/Colors';
import DetectedImageLabelItem from '../components/DetectedImageLabelItem';
import Loading from '../components/Loading';
import ManualSearchInputModal from '../components/ManualSearchInputModal';
import {
	searchMealCalories,
	clearMealCalories,
	clearImageDetection,
} from '../store/actions/detectionAction';

const ImageDetectedScreen = ({ navigation }) => {
	const labels = useSelector((state) => state.detection.detectedImageLabels);
	const awsImageUri = useSelector((state) => state.detection.awsImageUrl);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useDispatch();

	// toggles the modal in track screen
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	// handles search button press on manualSearch modal
	const handleOnMealSearch = (mealName) => {
		if (!mealName) return;
		// clear meal calorie response in detection reducer
		dispatch(clearMealCalories());

		// add meal calorie response in detection reducer
		try {
			dispatch(searchMealCalories(mealName));
			toggleModal();
			navigation.navigate('Detected Meal', { mealName: mealName });
		} catch (err) {
			Alert.alert('Sorry!!', err.message, [
				{
					text: 'Try Again',
					onPress: () => {},
				},
			]);
		}
	};

	// handle selected label press from image detection
	const handleSelectedLabel = (label) => {
		// clear meal calorie response in detection reducer
		dispatch(clearMealCalories());

		// add meal calorie response in detection reducer
		try {
			dispatch(searchMealCalories(label));
			navigation.navigate('Detected Meal', { mealName: label });
		} catch (err) {
			Alert.alert('Sorry!!', err.message, [
				{
					text: 'Try Again',
					onPress: () => {},
				},
			]);
		}
	};

	useEffect(() => {
		return () => {
			dispatch(clearImageDetection());
		};
	}, []);

	if (labels.length > 0) {
		return (
			<View style={styles.screenContent}>
				<Modal
					isVisible={isModalOpen}
					onBackdropPress={toggleModal}
					hideModalContentWhileAnimating={true}
					onSwipeComplete={toggleModal}
					swipeThreshold={20}
					swipeDirection='down'
				>
					<ManualSearchInputModal
						onCancel={toggleModal}
						onSearch={handleOnMealSearch}
					/>
				</Modal>
				<Animatable.View style={styles.header} animation='fadeIn'>
					<ImageBackground
						source={{ uri: awsImageUri }}
						style={{ width: '100%', height: '100%' }}
					>
						<View style={styles.screenTitleContainer}>
							<View style={styles.screenTitleTextContainer}>
								<Text style={styles.screenTitleText}>Detected Image</Text>
							</View>
						</View>
					</ImageBackground>
				</Animatable.View>

				<Animatable.View style={styles.footer} animation='fadeIn'>
					<Text style={styles.footerTitleText}>Choose the closest one</Text>
					<Feather name='chevrons-down' size={30} color={Colors.accentLight} />
					<ScrollView style={{ width: '90%' }}>
						<Animatable.View
							style={styles.labelItemContainer}
							animation='fadeInDownBig'
						>
							{labels.map((label, i) => {
								return (
									<DetectedImageLabelItem
										key={i}
										label={label}
										onSelectLabel={handleSelectedLabel}
									/>
								);
							})}
						</Animatable.View>
						<View style={styles.manualSearchContainer}>
							<Button
								containerStyle={styles.buttonContainer}
								buttonStyle={styles.button}
								title='Manual Search'
								type='solid'
								raised={true}
								titleStyle={styles.buttonText}
								onPress={toggleModal}
							/>
						</View>
					</ScrollView>
				</Animatable.View>
			</View>
		);
	} else {
		return <Loading prompt='DETECTING' />;
	}
};

export default ImageDetectedScreen;
