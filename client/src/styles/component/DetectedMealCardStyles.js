import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContent: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginBottom: 10,
	},
	mealTitleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 20,
		color: Colors.accent,
	},
	mealDetailsContainer: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	mealDetailsText: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
	},
	mealDetailsValueText: {
		color: Colors.accentLight,
	},
});

export default styles;
