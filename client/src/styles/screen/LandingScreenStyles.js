import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		backgroundColor: Colors.bgWhite,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30,
	},
	logo: {
		width: height_logo,
		height: height_logo,
	},
	title: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
		fontSize: 30,
	},
	subtitle: {
		fontFamily: Fonts.subtitle,
		color: Colors.accentLight,
		fontSize: 20,
		marginTop: 5,
	},
	buttonContainer: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: 150,
		height: 40,
		backgroundColor: Colors.primary,
	},
	buttonContent: {
		backgroundColor: Colors.primary,
	},
});

export default styles;
