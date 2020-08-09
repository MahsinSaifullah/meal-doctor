import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

import styles from '../styles/component/MeasurementTypeModalStyles';

const MeasurementTypeModal = ({ onMeasuringUnitSelect }) => {
	const selectedMeal = useSelector((state) => state.detection.selectedMeal);

	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21)
		TouchableComp = TouchableNativeFeedback;

	return (
		<View style={styles.modalContainer}>
			<View style={styles.modalCard}>
				<View style={styles.modalTextContainer}>
					<Text style={styles.modalText}>Choose a Measurement unit</Text>
				</View>
				<View style={styles.modalItemContainer}>
					{selectedMeal.measurementUnits.slice(0, 8).map((unit) => {
						return (
							<TouchableComp
								key={unit.uri}
								onPress={() => onMeasuringUnitSelect(unit)}
							>
								<View style={styles.unitLableContainer}>
									<Text style={styles.unitLableText}>{unit.label}</Text>
								</View>
							</TouchableComp>
						);
					})}
				</View>
			</View>
		</View>
	);
};

export default MeasurementTypeModal;
