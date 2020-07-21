import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	componentContainer: {
		height: screenHeight >= 700 ? '50%' : '45%',
		width: '100%',
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	totalCalorieCardContainer: {
		height: screenHeight >= 700 ? 180 : 150,
		width: screenHeight >= 700 ? 180 : 150,
		backgroundColor: Colors.bgGrey,
		borderWidth: 1,
		borderRadius: screenHeight >= 700 ? 90 : 75,
		borderColor: Colors.accentLight,
		shadowColor: Colors.accent,
		shadowOffset: 0.5,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	totalCalorieValue: {
		fontSize: screenHeight >= 700 ? 50 : 40,
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
	},
	totalCalorieUnit: {
		fontFamily: Fonts.subtitle,
		fontSize: screenHeight >= 700 ? 20 : 15,
		color: Colors.accentLight,
	},
	totalCalorieText: {
		fontFamily: Fonts.subtitle,
		fontSize: screenHeight >= 700 ? 20 : 18,
		color: Colors.accentLight,
	},
	goalText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: screenHeight >= 700 ? 20 : 18,
		color: Colors.accentLight,
	},
	totalNutrientCardContainer: {
		flexDirection: 'row',
		width: '90%',
		paddingVertical: screenHeight >= 700 ? 15 : 10,
		marginVertical: screenHeight >= 700 ? 10 : 5,
		paddingHorizontal: 20,
		justifyContent: 'center',
	},
	nutrientText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: screenHeight >= 700 ? 20 : 18,
		color: Colors.accent,
	},
	totalNutrientValueContainer: {
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nutrientParcentage: {
		fontFamily: Fonts.subtitle,
		fontSize: screenHeight >= 700 ? 20 : 18,
		color: Colors.accent,
	},
	nutrientGram: {
		fontFamily: Fonts.subtitle,
		fontSize: 15,
		color: Colors.accentLight,
	},
	totalNutrientParcentageContainer: {
		width: screenHeight >= 700 ? 80 : 70,
		height: screenHeight >= 700 ? 80 : 70,
		borderRadius: screenHeight >= 700 ? 40 : 35,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: Colors.accentLight,
	},
});

export default styles;
