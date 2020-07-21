import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;
const screenWeight = Dimensions.get('window').width;

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: Colors.bgGrey,
	},
	dateDisplayContainer: {
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
		color: Colors.primary,
		fontFamily: Fonts.secondaryTitle,
		fontSize: screenHeight >= 700 ? 25 : 22,
	},
	nutrientDisplayContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
