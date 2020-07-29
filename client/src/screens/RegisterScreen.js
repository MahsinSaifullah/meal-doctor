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
	ScrollView,
	ActivityIndicator,
	Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import validate from 'validate.js';
import { useDispatch } from 'react-redux';

import styles from '../styles/screen/RegisterScreenStyles';
import Colors from '../constants/Colors';
import { register, clearErrors } from '../store/actions/authAction';

const constraints = {
	email: {
		email: true,
	},
	password: { length: { minimum: 6 } },
	confirmPassword: { equality: 'password' },
};

const RegisterScreen = ({ navigation }) => {
	const [inputData, setInputData] = useState({
		name: '',
		email: '',
		gender: 'male',
		age: '',
		height: '',
		weight: '',
		activityLevel: 'moderate',
		goal: 'weight loss',
		password: '',
		confirmPassword: '',
		isEmailValid: false,
		isPasswordValid: false,
		showEmailAlert: false,
		showPasswordAlert: false,
		showConfirmPasswordAlert: false,
		secureTextEntryForPassword: true,
		secureTextEntryForConfirmPassword: true,
	});

	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	// change text handler for name input
	const handleNameInputChange = (value) => {
		setInputData({
			...inputData,
			name: value,
		});
	};

	// change text handler for age input
	const handleAgeInputChange = (value) => {
		setInputData({
			...inputData,
			age: value,
		});
	};

	// change text handler for height input
	const handleHeightInputChange = (value) => {
		setInputData({
			...inputData,
			height: value,
		});
	};

	// change text handler for weight input
	const handleWeightInputChange = (value) => {
		setInputData({
			...inputData,
			weight: value,
		});
	};

	// change text handler for email input
	const handleEmailInputChange = (value) => {
		setInputData({ ...inputData, email: value });
	};

	// change text handler for password input
	const handlePasswordInputChange = (value) => {
		setInputData({
			...inputData,
			password: value,
		});
	};

	// change text handler for confirm password input
	const handleConfirmPasswordInputChange = (value) => {
		setInputData({
			...inputData,
			confirmPassword: value,
		});
	};

	// toggle secure text entry attribute of password input
	const toggleSecureTextEntryForPassword = () => {
		setInputData({
			...inputData,
			secureTextEntryForPassword: !inputData.secureTextEntryForPassword,
		});
	};

	// toggle secure text entry attribute of confirm password input
	const toggleSecureTextEntryForConfirmPassword = () => {
		setInputData({
			...inputData,
			secureTextEntryForConfirmPassword: !inputData.secureTextEntryForConfirmPassword,
		});
	};

	// applies validation on email input
	const handleEmailEndEditing = () => {
		if (validate({ email: inputData.email }, constraints)) {
			setInputData({ ...inputData, isEmailValid: false, showEmailAlert: true });
		} else {
			setInputData({ ...inputData, isEmailValid: true, showEmailAlert: false });
		}
	};

	// applies validation on password input
	const handlePasswordEndEditing = () => {
		if (validate({ password: inputData.password }, constraints)) {
			setInputData({
				...inputData,
				isPasswordValid: false,
				showPasswordAlert: true,
			});
		} else {
			setInputData({
				...inputData,
				isPasswordValid: true,
				showPasswordAlert: false,
			});
		}
	};

	// applies validation on confirm input
	const handleConfirmPasswordEndEditing = () => {
		if (
			validate(
				{
					password: inputData.password,
					confirmPassword: inputData.confirmPassword,
				},
				constraints
			)
		) {
			setInputData({
				...inputData,
				isPasswordValid: false,
				showConfirmPasswordAlert: true,
			});
		} else {
			setInputData({
				...inputData,
				isPasswordValid: true,
				showConfirmPasswordAlert: false,
			});
		}
	};

	// handles Register button press
	const handleOnSubmit = async () => {
		const formData = {
			name: inputData.name,
			gender: inputData.gender,
			age: inputData.age,
			height: inputData.height,
			weight: inputData.weight,
			activityLevel: inputData.activityLevel,
			goal: inputData.goal,
			email: inputData.email,
			password: inputData.password,
		};

		if (
			inputData.name &&
			inputData.gender &&
			inputData.age &&
			inputData.height &&
			inputData.weight &&
			inputData.activityLevel &&
			inputData.goal &&
			inputData.isEmailValid &&
			inputData.isPasswordValid
		) {
			dispatch(clearErrors());
			setLoading(true);
			try {
				// after basic validation, dispatch register action to reducer
				await dispatch(register(formData));
			} catch (err) {
				// any backend errors will be alerted to the user
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
			// any user errors will alerted
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
					<View style={styles.footer}>
						<ScrollView style={{ flex: 1 }}>
							<Animatable.View animation='fadeInUpBig'>
								<Text style={styles.text_footer}>Name</Text>
								<View style={styles.action}>
									<FontAwesome
										name='user-o'
										color={Colors.accentLight}
										size={15}
									/>
									<TextInput
										placeholder='Enter your Name'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handleNameInputChange(value)}
									/>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Gender
								</Text>
								<View style={styles.actionGender}>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='male'
											color={Colors.accent}
											status={
												inputData.gender === 'male' ? 'checked' : 'unchecked'
											}
											onPress={() =>
												setInputData({ ...inputData, gender: 'male' })
											}
										/>
										<Text style={styles.actionRadioText}>Male</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='female'
											color={Colors.accent}
											status={
												inputData.gender === 'female' ? 'checked' : 'unchecked'
											}
											onPress={() =>
												setInputData({ ...inputData, gender: 'female' })
											}
										/>
										<Text style={styles.actionRadioText}>Female</Text>
									</View>
								</View>
								<Text style={styles.text_footer}>Age</Text>
								<View style={styles.action}>
									<Feather
										name='user-plus'
										color={Colors.accentLight}
										size={18}
									/>
									<TextInput
										placeholder='Enter your Age'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handleAgeInputChange(value)}
										keyboardType='numeric'
										maxLength={3}
									/>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Height (in cm)
								</Text>
								<View style={styles.action}>
									<MaterialCommunityIcons
										name='human-male-height'
										color={Colors.accentLight}
										size={20}
									/>
									<TextInput
										placeholder='Enter your Height'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handleHeightInputChange(value)}
										keyboardType='numeric'
										maxLength={3}
									/>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Weight (in kg)
								</Text>
								<View style={styles.action}>
									<MaterialCommunityIcons
										name='weight-kilogram'
										color={Colors.accentLight}
										size={20}
									/>
									<TextInput
										placeholder='Enter your Weight'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handleWeightInputChange(value)}
										keyboardType='numeric'
										maxLength={3}
									/>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Activity Level
								</Text>
								<View style={styles.actionRadio}>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='very light'
											color={Colors.accent}
											status={
												inputData.activityLevel === 'very light'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													activityLevel: 'very light',
												})
											}
										/>
										<Text style={styles.actionRadioText}>V. Low</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='light'
											color={Colors.accent}
											status={
												inputData.activityLevel === 'light'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({ ...inputData, activityLevel: 'light' })
											}
										/>
										<Text style={styles.actionRadioText}>Low</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='moderate'
											color={Colors.accent}
											status={
												inputData.activityLevel === 'moderate'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													activityLevel: 'moderate',
												})
											}
										/>
										<Text style={styles.actionRadioText}>Moderate</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='heavy'
											color={Colors.accent}
											status={
												inputData.activityLevel === 'heavy'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													activityLevel: 'heavy',
												})
											}
										/>
										<Text style={styles.actionRadioText}>High</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='very heavy'
											color={Colors.accent}
											status={
												inputData.activityLevel === 'very heavy'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													activityLevel: 'very heavy',
												})
											}
										/>
										<Text style={styles.actionRadioText}> V. High</Text>
									</View>
								</View>
								<Text style={styles.text_footer}>Goal</Text>
								<View style={styles.actionGender}>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='weight loss'
											color={Colors.accent}
											status={
												inputData.goal === 'weight loss'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({ ...inputData, goal: 'weight loss' })
											}
										/>
										<Text style={styles.actionRadioText}>Weight Loss</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='weight maintain'
											color={Colors.accent}
											status={
												inputData.goal === 'weight maintain'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													goal: 'weight maintain',
												})
											}
										/>
										<Text style={styles.actionRadioText}>Weight Maintain</Text>
									</View>
									<View style={styles.actionRadioContent}>
										<RadioButton
											value='weight gain'
											color={Colors.accent}
											status={
												inputData.goal === 'weight gain'
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setInputData({
													...inputData,
													goal: 'weight gain',
												})
											}
										/>
										<Text style={styles.actionRadioText}>Weight Gain</Text>
									</View>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Email
								</Text>
								<View
									style={
										inputData.showEmailAlert
											? styles.actionError
											: styles.action
									}
								>
									<MaterialCommunityIcons
										name='email-outline'
										color={Colors.accentLight}
										size={18}
									/>
									<TextInput
										placeholder='Enter your Email'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handleEmailInputChange(value)}
										onEndEditing={handleEmailEndEditing}
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
										email you entered is not valid
									</Text>
								)}
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Password
								</Text>
								<View
									style={
										inputData.showPasswordAlert
											? styles.actionError
											: styles.action
									}
								>
									<Feather name='lock' color={Colors.accentLight} size={18} />
									<TextInput
										placeholder='Enter your Password'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handlePasswordInputChange(value)}
										secureTextEntry={inputData.secureTextEntryForPassword}
										onEndEditing={handlePasswordEndEditing}
									/>
									<TouchableOpacity onPress={toggleSecureTextEntryForPassword}>
										{inputData.secureTextEntryForPassword ? (
											<Feather name='eye-off' color='grey' size={20} />
										) : (
											<Feather name='eye' color={Colors.accent} size={20} />
										)}
									</TouchableOpacity>
								</View>
								{inputData.showPasswordAlert && (
									<Text style={styles.errorMsg}>
										password is too short, must be minimum 6 characters
									</Text>
								)}
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Confirm Password
								</Text>
								<View
									style={
										inputData.showConfirmPasswordAlert
											? styles.actionError
											: styles.action
									}
								>
									<Feather name='lock' color={Colors.accentLight} size={18} />
									<TextInput
										placeholder='Enter your Password'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) =>
											handleConfirmPasswordInputChange(value)
										}
										secureTextEntry={
											inputData.secureTextEntryForConfirmPassword
										}
										onEndEditing={handleConfirmPasswordEndEditing}
									/>
									<TouchableOpacity
										onPress={toggleSecureTextEntryForConfirmPassword}
									>
										{inputData.secureTextEntryForConfirmPassword ? (
											<Feather name='eye-off' color='grey' size={20} />
										) : (
											<Feather name='eye' color={Colors.accent} size={20} />
										)}
									</TouchableOpacity>
								</View>
								{inputData.showConfirmPasswordAlert && (
									<Text style={styles.errorMsg}>password did not match</Text>
								)}

								<View style={styles.buttonContainer}>
									{loading ? (
										<ActivityIndicator size='small' color={Colors.primary} />
									) : (
										<Button
											containerStyle={styles.button}
											buttonStyle={styles.buttonContent}
											title='Register'
											type='solid'
											raised={true}
											onPress={handleOnSubmit}
										/>
									)}
								</View>

								<TouchableOpacity
									style={styles.newAccountActionContainer}
									onPress={() => navigation.navigate('Login')}
								>
									<Text style={styles.newAccountAction}>
										Have an account? Login now
									</Text>
								</TouchableOpacity>
							</Animatable.View>
						</ScrollView>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default RegisterScreen;
