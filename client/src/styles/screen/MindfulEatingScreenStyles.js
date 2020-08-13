import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: '50%',
		backgroundColor: Colors.primary,
	},
	promptTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	promptTitleText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 60,
		color: Colors.bgWhite,
	},
	promptSubtitleText: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.bgWhite,
		fontSize: 30,
	},
	startButtonContainer: {
		marginTop: 30,
		width: '100%',
		alignItems: 'center',
	},
	buttonContainer: {
		width: '60%',
		marginBottom: 15,
	},
	button: {
		backgroundColor: Colors.accent,
		height: 50,
		borderRadius: 20,
	},
	step1TitleText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 40,
		color: Colors.bgWhite,
	},
	step1SecondaryTitleText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
		color: Colors.bgWhite,
	},
	step1emoji: {
		fontSize: 50,
	},
	step1SubtitleTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	step1SubtitleText: {
		color: Colors.bgWhite,
		fontFamily: Fonts.secondaryTitle,
		fontSize: 22,
	},
});

export default styles;
