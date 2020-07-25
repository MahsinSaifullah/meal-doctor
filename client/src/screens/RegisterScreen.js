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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

import styles from '../styles/screen/RegisterScreenStyles';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => {
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
		secureTextEntryForPassword: true,
		secureTextEntryForConfirmPassword: true,
	});

	const handleNameInputChange = (value) => {
		setInputData({
			...inputData,
			name: value,
		});
	};
	const handleAgeInputChange = (value) => {
		setInputData({
			...inputData,
			age: value,
		});
	};
	const handleHeightInputChange = (value) => {
		setInputData({
			...inputData,
			height: value,
		});
	};
	const handleWeightInputChange = (value) => {
		setInputData({
			...inputData,
			weight: value,
		});
	};

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
	const handleConfirmPasswordInputChange = (value) => {
		setInputData({
			...inputData,
			confirmPassword: value,
		});
	};

	const toggleSecureTextEntryForPassword = () => {
		setInputData({
			...inputData,
			secureTextEntryForPassword: !inputData.secureTextEntryForPassword,
		});
	};
	const toggleSecureTextEntryForConfirmPassword = () => {
		setInputData({
			...inputData,
			secureTextEntryForConfirmPassword: !inputData.secureTextEntryForConfirmPassword,
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
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Goal
								</Text>
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
								<View style={styles.action}>
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
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Password
								</Text>
								<View style={styles.action}>
									<Feather name='lock' color={Colors.accentLight} size={18} />
									<TextInput
										placeholder='Enter your Password'
										style={styles.textInput}
										autoCapitalize='none'
										onChangeText={(value) => handlePasswordInputChange(value)}
										secureTextEntry={inputData.secureTextEntryForPassword}
									/>
									<TouchableOpacity onPress={toggleSecureTextEntryForPassword}>
										{inputData.secureTextEntryForPassword ? (
											<Feather name='eye-off' color='grey' size={20} />
										) : (
											<Feather name='eye' color={Colors.accent} size={20} />
										)}
									</TouchableOpacity>
								</View>
								<Text style={{ ...styles.text_footer, marginTop: 10 }}>
									Confirm Password
								</Text>
								<View style={styles.action}>
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
								<View style={styles.buttonContainer}>
									<Button
										containerStyle={styles.button}
										buttonStyle={styles.buttonContent}
										title='Register'
										type='solid'
										raised={true}
										onPress={() => console.log(inputData)}
									/>
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

export default LoginScreen;
