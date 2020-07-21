import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContainer: {
		backgroundColor: Colors.bgWhite,
		borderColor: Colors.primary,
		borderRadius: 20,
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		width: '95%',
		marginBottom: 10,
		overflow: 'hidden',
	},
	componentHeaderContainer: {
		flexDirection: 'row',
		borderColor: Colors.primary,
		borderBottomWidth: 2,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		padding: 10,
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	addMealButton: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
	},
	addMealButtonText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 30,
		color: Colors.bgWhite,
	},
	mealTypeHeaderText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
		color: Colors.accent,
	},
	foodLogContainer: {
		padding: 10,
	},
});

export default styles;
