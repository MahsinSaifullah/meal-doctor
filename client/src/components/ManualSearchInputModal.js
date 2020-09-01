import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/ManualSearchInputModalStyles';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const ManualSearchInputModal = ({ onSearch, onCancel }) => {
	const [input, setInput] = useState('');
	return (
		<View style={styles.modalContainer}>
			<Animatable.View style={styles.modalCard} animation='fadeInDown'>
				<View style={styles.modalTextContainer}>
					<Searchbar
						style={{ width: '100%' }}
						inputStyle={{
							fontFamily: Fonts.secondaryTitle,
						}}
						placeholder='Enter your meal name'
						value={input}
						onChangeText={setInput}
					/>
				</View>
				<View style={styles.modalButtonContainer}>
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
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Search'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={() => {
							if (input) onSearch(input);
						}}
					/>
				</View>
			</Animatable.View>
		</View>
	);
};

export default ManualSearchInputModal;
