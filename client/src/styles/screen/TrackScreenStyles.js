import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

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
		fontSize: 25,
	},
	nutrientDisplayContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
