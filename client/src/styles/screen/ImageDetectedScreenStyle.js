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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	screenTitleContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	screenTitleTextContainer: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		opacity: 0.7,
	},
	screenTitleText: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.bgWhite,
		fontSize: 30,
		zIndex: 2,
	},
	footer: {
		flex: 2,
		backgroundColor: Colors.bgWhite,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderTopWidth: 15,
		borderColor: Colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 30,
		alignItems: 'center',
	},
	footerTitleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 25,
		color: Colors.accent,
	},
	labelItemContainer: {
		marginTop: 10,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	manualSearchContainer: {
		width: '100%',
		alignItems: 'center',
		marginTop: 10,
	},
	buttonContainer: {
		margin: 5,
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 10,
	},
	buttonText: {
		fontFamily: Fonts.secondaryTitle,
	},
});

export default styles;
