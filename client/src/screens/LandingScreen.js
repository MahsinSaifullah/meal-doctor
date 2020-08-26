import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/screen/LandingScreenStyles';

const LandingScreen = ({ navigation }) => {
	return (
		<View style={styles.screenContent}>
			<View style={styles.header}>
				<Animatable.Image
					animation='fadeInDown'
					source={require('../../assets/AppLogo.png')}
					style={styles.logo}
					resizeMode='stretch'
				/>
			</View>
			<Animatable.View style={styles.footer} animation='fadeInUpBig'>
				<Text style={styles.title}>
					Eating Healthy Today, Keeps Doctor away!
				</Text>
				<Text style={styles.subtitle}>Let us help you in your Journey</Text>
				<View style={styles.buttonContainer}>
					<Button
						containerStyle={styles.button}
						buttonStyle={styles.buttonContent}
						title='Register'
						type='solid'
						raised={true}
						onPress={() => navigation.navigate('Register')}
					/>
					<Button
						containerStyle={styles.button}
						buttonStyle={styles.buttonContent}
						title='Login'
						type='solid'
						raised={true}
						onPress={() => navigation.navigate('Login')}
					/>
				</View>
			</Animatable.View>
		</View>
	);
};

export default LandingScreen;
