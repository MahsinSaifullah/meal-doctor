import { StyleSheet, Platform, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: Colors.primary,
		marginTop: screenHeight >= 700 ? 4 : 0,
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: '#fff',
		fontFamily: Fonts.secondaryTitle,
		fontSize: 30,
	},
	text_footer: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
		fontSize: screenHeight >= 700 ? 15 : 13,
	},
	action: {
		flexDirection: 'row',
		marginTop: 8,
		borderBottomWidth: 1,
		borderBottomColor: Colors.accentLight,
		paddingBottom: 1,
	},
	actionGender: {
		flexDirection: 'row',
	},
	actionRadio: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	actionRadioContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	actionRadioText: {
		fontFamily: Fonts.subtitle,
		fontSize: 14,
		color: Colors.accent,
	},
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -15,
		paddingLeft: 8,
		color: Colors.accent,
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		marginTop: 20,
	},
	button: {
		width: '80%',
	},
	buttonContent: {
		backgroundColor: Colors.primary,
		height: screenHeight >= 700 ? 45 : 50,
		borderRadius: 10,
	},
	newAccountActionContainer: {
		width: '100%',
		marginTop: 15,
		alignItems: 'center',
	},
	newAccountAction: {
		fontFamily: Fonts.subtitle,
		fontSize: 18,
		color: Colors.accent,
	},
});

export default styles;
