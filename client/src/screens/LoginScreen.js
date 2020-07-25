import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import styles from '../styles/screen/LoginScreenStyles';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => {
	const [inputData, setInputData] = useState({
		email: '',
		password: '',
		isEmailValid: false,
		secureTextEntry: true,
	});

	const handleEmailInputChange = (value) => {
		if (value.length !== 0) {
			setInputData({ ...inputData, email: value, isEmailValid: true });
		} else {
			setInputData({ ...inputData, email: value, isEmailValid: false });
		}
	};

	const handlePasswordInputChange = (value) => {
		setInputData({
			...inputData,
			password: value,
		});
	};

	const toggleSecureTextEntry = () => {
		setInputData({
			...inputData,
			secureTextEntry: !inputData.secureTextEntry,
		});
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.screenContent}
				behavior={Platform.OS === 'ios' ? 'padding' : ''}
				keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : ''}
			>
				<View style={{ flex: 1 }}>
					<View style={styles.header}>
						<Animatable.Text animation='fadeInDown' style={styles.text_header}>
							Hi there!
						</Animatable.Text>
					</View>
					<Animatable.View style={styles.footer} animation='fadeInUpBig'>
						<Text style={styles.text_footer}>Email</Text>
						<View style={styles.action}>
							<FontAwesome name='user-o' color={Colors.accentLight} size={20} />
							<TextInput
								placeholder='Enter your Email'
								style={styles.textInput}
								autoCapitalize='none'
								onChangeText={(value) => handleEmailInputChange(value)}
							/>
							{inputData.isEmailValid && (
								<Animatable.View animation='bounceIn'>
									<Feather
										name='check-circle'
										color={Colors.primary}
										size={20}
									/>
								</Animatable.View>
							)}
						</View>
						<Text style={{ ...styles.text_footer, marginTop: 35 }}>
							Password
						</Text>
						<View style={styles.action}>
							<Feather name='lock' color={Colors.accentLight} size={20} />
							<TextInput
								placeholder='Enter your Password'
								style={styles.textInput}
								autoCapitalize='none'
								onChangeText={(value) => handlePasswordInputChange(value)}
								secureTextEntry={inputData.secureTextEntry}
							/>
							<TouchableOpacity onPress={toggleSecureTextEntry}>
								{inputData.secureTextEntry ? (
									<Feather name='eye-off' color='grey' size={20} />
								) : (
									<Feather name='eye' color={Colors.accent} size={20} />
								)}
							</TouchableOpacity>
						</View>
						<View style={styles.buttonContainer}>
							<Button
								containerStyle={styles.button}
								buttonStyle={styles.buttonContent}
								title='Login'
								type='solid'
								raised={true}
								onPress={() =>
									console.log(
										`Email: ${inputData.email} & Password: ${inputData.password}`
									)
								}
							/>
						</View>
						<TouchableOpacity
							style={styles.newAccountActionContainer}
							onPress={() => navigation.navigate('Register')}
						>
							<Text style={styles.newAccountAction}>Create a new account</Text>
						</TouchableOpacity>
					</Animatable.View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
