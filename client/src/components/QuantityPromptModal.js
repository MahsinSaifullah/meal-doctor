import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/QuantityPromptModalStyles';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const QuantityPromptModal = ({ onConfirm, onCancel }) => {
	const [input, setInput] = useState('');
	const selectedMeasuringUnit = useSelector(
		(state) => state.detection.selectedMeasuringUnit
	);
	return (
		<View style={styles.modalContainer}>
			<Animatable.View style={styles.modalCard} animation='fadeInDown'>
				<View style={styles.modalTextContainer}>
					<View style={styles.modalTitleTextContainer}>
						<Text style={styles.modalText}>How much do you intend to eat?</Text>
					</View>

					<TextInput
						style={{ width: '90%' }}
						mode='outlined'
						label={`Quantity in ${selectedMeasuringUnit}`}
						placeholder='Enter the quantity'
						value={input}
						onChangeText={setInput}
						keyboardType='numeric'
					/>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Confirm'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={() => onConfirm(input)}
					/>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={{
							...styles.button,
							backgroundColor: Colors.trafficRed,
						}}
						title='Cancel'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onCancel}
					/>
				</View>
			</Animatable.View>
		</View>
	);
};

export default QuantityPromptModal;
