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
	ActivityIndicator,
	Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import validate from 'validate.js';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/screen/LoginScreenStyles';
import Colors from '../constants/Colors';
import { login, clearErrors } from '../store/actions/authAction';

const constraints = {
	from: {
		email: true,
	},
};

const LoginScreen = ({ navigation }) => {
	const [inputData, setInputData] = useState({
		email: '',
		password: '',
		isEmailValid: false,
		secureTextEntry: true,
		showEmailAlert: false,
	});

	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const handleEmailInputChange = (value) => {
		setInputData({ ...inputData, email: value });
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

	const handleEndEditing = () => {
		if (validate({ from: inputData.email }, constraints)) {
			setInputData({ ...inputData, isEmailValid: false, showEmailAlert: true });
		} else {
			setInputData({ ...inputData, isEmailValid: true, showEmailAlert: false });
		}
	};

	const handleOnSubmit = async () => {
		const formData = {
			email: inputData.email,
			password: inputData.password,
		};

		if (inputData.isEmailValid && inputData.password) {
			dispatch(clearErrors());
			setLoading(true);

			try {
				await dispatch(login(formData));
			} catch (err) {
				Alert.alert('Sorry!!', err.message, [
					{
						text: 'Try Again',
						onPress: () => {
							console.log('OK Pressed');
						},
					},
				]);
			}
			setLoading(false);
		} else {
			Alert.alert('Sorry!!', 'Invalid field entry', [
				{
					text: 'Ok',
					onPress: () => {
						console.log('OK Pressed');
					},
				},
			]);
		}
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
						<View
							style={
								inputData.showEmailAlert ? styles.actionError : styles.action
							}
						>
							<FontAwesome
								name='user-o'
								color={
									inputData.showEmailAlert ? '#FF0000' : Colors.accentLight
								}
								size={20}
							/>
							<TextInput
								placeholder='Enter your Email'
								style={styles.textInput}
								autoCapitalize='none'
								onChangeText={(value) => handleEmailInputChange(value)}
								onEndEditing={handleEndEditing}
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
						{inputData.showEmailAlert && (
							<Text style={styles.errorMsg}>
								Email you entered is not valid
							</Text>
						)}
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
							{loading ? (
								<ActivityIndicator size='small' color={Colors.primary} />
							) : (
								<Button
									containerStyle={styles.button}
									buttonStyle={styles.buttonContent}
									title='Login'
									type='solid'
									raised={true}
									onPress={handleOnSubmit}
								/>
							)}
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
