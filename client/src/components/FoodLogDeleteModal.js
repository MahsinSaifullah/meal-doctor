import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/FoodLogDeleteModalStyles';
import Colors from '../constants/Colors';

const FoodLogDeleteModal = ({ onYes, onCancel }) => {
	return (
		<View style={styles.modalContainer}>
			<Animatable.View style={styles.modalCard} animation='fadeInDown'>
				<View style={styles.modalTextContainer}>
					<Text style={styles.modalText}>
						Are you sure about deleting the meal?
					</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Yes'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onYes}
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

export default FoodLogDeleteModal;
