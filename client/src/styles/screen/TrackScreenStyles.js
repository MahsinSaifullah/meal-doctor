import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screenContent: {
		height: '100%',
		backgroundColor: Colors.bgWhite,
	},
	dateDisplayContainer: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: 15,
		marginHorizontal: '10%',
		alignItems: 'center',
		width: '100%',
		height: '5%',
	},
	dateTextContainer: {
		marginHorizontal: 20,
	},
	dateText: {
		color: Colors.accent,
		fontFamily: Fonts.secondaryTitle,
		fontSize: screenHeight >= 700 ? 30 : 24,
	},
	nutrientDisplayContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	foodLogDisplayContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
});

export default styles;
