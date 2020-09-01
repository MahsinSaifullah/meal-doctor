import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';

import styles from '../styles/screen/ProfileScreenStyles';

const ProfileScreen = ({ navigation }) => {
	const user = useSelector((state) => state.auth.user);
	let src;

	if (user) {
		if (user.gender === 'male') src = require('../../assets/maleProfile.png');
		else src = require('../../assets/femaleProfile.png');
	}

	if (user)
		return (
			<View style={styles.screenContent}>
				<View style={styles.header}>
					<Animatable.Image
						animation='fadeInDown'
						source={src}
						style={styles.logo}
						resizeMode='stretch'
					/>
					<View style={styles.userNameContainer}>
						<Text style={styles.userNameText}>{user.name}</Text>
					</View>
				</View>
				<Animatable.View style={styles.footer} animation='fadeInUpBig'>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Name: </Text>
							<Text style={styles.userInfoText}>{user.name}</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Gender: </Text>
							<Text style={styles.userInfoText}>{user.gender}</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Age: </Text>
							<Text style={styles.userInfoText}>{user.age}</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Height: </Text>
							<Text style={styles.userInfoText}>{user.height} cm</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Weight: </Text>
							<Text style={styles.userInfoText}>{user.weight} kg</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Goal: </Text>
							<Text style={styles.userInfoText}>{user.goal}</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Activity Level: </Text>
							<Text style={styles.userInfoText}>{user.activityLevel}</Text>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userInfoTextTitle}>Goal Calorie: </Text>
							<Text style={styles.userInfoText}>{user.goalCalories} kcal</Text>
						</View>
					</ScrollView>
				</Animatable.View>
			</View>
		);
	else
		return (
			<View style={styles.screenContent}>
				<Text>No User found</Text>
			</View>
		);
};

export default ProfileScreen;
