import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import styles from '../styles/component/FoodLogItemStyles';
import Colors from '../constants/Colors';
import { getDailyStats } from '../store/actions/mealLogAction';

const FoodLogItem = ({
	id,
	mealUri,
	mealName,
	mealQuantity,
	mealMeasureUnit,
	mealTime,
	mealCalories,
	fatParcentage,
	satFatParcentage,
	saltParcentage,
	onLongPress,
}) => {
	// conditional rendering to implement traffic light labels

	let bgColorForFat = Colors.primary;
	if (fatParcentage >= 20) {
		bgColorForFat = Colors.trafficRed;
		if (fatParcentage > 20) fatParcentage = '>20';
	} else if (fatParcentage >= 10) bgColorForFat = Colors.trafficYellow;

	let bgColorForSatFat = Colors.primary;
	if (satFatParcentage >= 15) {
		bgColorForSatFat = Colors.trafficRed;
		if (satFatParcentage > 15) satFatParcentage = '>15';
	} else if (satFatParcentage >= 7) bgColorForSatFat = Colors.trafficYellow;

	let bgColorForSalt = Colors.primary;
	if (saltParcentage >= 20) {
		bgColorForSalt = Colors.trafficRed;
		if (saltParcentage > 20) saltParcentage = '>20';
	} else if (saltParcentage >= 10) bgColorForSalt = Colors.trafficYellow;

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(getDailyStats());
		};
	}, []);

	return (
		<TouchableOpacity onLongPress={() => onLongPress(id)}>
			<View style={styles.componentContainer}>
				<Avatar
					size='medium'
					containerStyle={styles.avatarContainer}
					avatarStyle={styles.avatar}
					source={{
						uri: mealUri,
					}}
				/>
				<View style={styles.mealDetailContainer}>
					<Text style={styles.mealTitleText}>
						{mealName.length > 12
							? mealName.substring(0, 10).concat(' ...')
							: mealName}
					</Text>
					<View>
						<Text style={styles.mealSubtitleText}>
							Amount:{' '}
							<Text style={styles.mealSubtitleValue}>
								{mealQuantity} {mealMeasureUnit}
							</Text>
						</Text>
						<Text style={styles.mealSubtitleText}>
							Mindfulness:{' '}
							<Text style={styles.mealSubtitleValue}>{mealTime}</Text>
						</Text>
					</View>
				</View>
				<View style={styles.nutrientDetailContainer}>
					<View
						style={{
							...styles.nutrientValueContainer,
							backgroundColor: bgColorForFat,
						}}
					>
						<Text style={styles.nutrientTitleText}>Fat</Text>
						<Text style={styles.nutrientSubtitleText}>{fatParcentage}%</Text>
					</View>
					<View
						style={{
							...styles.nutrientValueContainer,
							backgroundColor: bgColorForSatFat,
						}}
					>
						<Text style={styles.nutrientTitleText}>SatFat</Text>
						<Text style={styles.nutrientSubtitleText}>{satFatParcentage}%</Text>
					</View>
					<View
						style={{
							...styles.nutrientValueContainer,
							backgroundColor: bgColorForSalt,
						}}
					>
						<Text style={styles.nutrientTitleText}>Salt</Text>
						<Text style={styles.nutrientSubtitleText}>{saltParcentage}%</Text>
					</View>
					<View style={styles.nutrientValueContainer}>
						<Text style={{ ...styles.nutrientTitleText, color: Colors.accent }}>
							Calories
						</Text>
						<Text
							style={{ ...styles.nutrientSubtitleText, color: Colors.accent }}
						>
							{mealCalories}kcal
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default FoodLogItem;
