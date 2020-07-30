import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	titleContainer: {
		marginTop: 25,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 25,
		color: Colors.accent,
	},
	mealCardsContainer: {
		width: '100%',
		padding: 10,
	},
});

export default styles;
