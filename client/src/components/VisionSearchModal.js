import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/VisionSearchModalStyles';

const SearchTypeModal = ({ onPhoto, onCameraRoll }) => {
	return (
		<View style={styles.modalContainer}>
			<Animatable.View style={styles.modalCard} animation='fadeInDown'>
				<View style={styles.modalTextContainer}>
					<Text style={styles.modalText}>You have Options...</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Take a Photo'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onPhoto}
					/>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Camera Roll'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onCameraRoll}
					/>
				</View>
			</Animatable.View>
		</View>
	);
};

export default SearchTypeModal;
