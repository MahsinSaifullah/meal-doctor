import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/component/MindfulEatingPromptStyles';
import Colors from '../constants/Colors';

const MindfulEatingPrompt = ({ onMindulEating, onSkip }) => {
	return (
		<View style={styles.modalContainer}>
			<Animatable.View style={styles.modalCard} animation='fadeInDown'>
				<View style={styles.modalTextContainer}>
					<Text style={styles.modalText}>Do want a Mindful Experience?</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='Yes'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onMindulEating}
					/>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={{
							...styles.button,
							backgroundColor: Colors.trafficRed,
						}}
						title='Skip'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onSkip}
					/>
				</View>
			</Animatable.View>
		</View>
	);
};

export default MindfulEatingPrompt;
