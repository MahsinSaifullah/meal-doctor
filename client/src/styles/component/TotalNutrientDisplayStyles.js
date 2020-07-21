import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContainer: {
		height: 170,
		width: 170,
		marginTop: 15,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderRadius: 85,
		borderColor: Colors.accent,
		shadowColor: Colors.accent,
		shadowOffset: 0.5,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 20,
		backgroundColor: Colors.bgGrey,
		overflow: 'hidden',
	},
	totalCalorieCardContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	totalCalorieValue: {
		fontSize: 50,
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
	},
	totalCalorieUnit: {
		fontFamily: Fonts.subtitle,
		fontSize: 20,
		color: 'grey',
	},
	totalCalorieText: {
		fontFamily: Fonts.subtitle,
		fontSize: 20,
		color: 'grey',
	},
	goalText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 20,
		color: 'grey',
	},
});

export default styles;
