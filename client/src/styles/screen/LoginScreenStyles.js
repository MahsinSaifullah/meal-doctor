import { StyleSheet, Platform, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: screenHeight >= 700 ? 1 : 2,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: '#fff',
		fontFamily: Fonts.secondaryTitle,
		fontSize: 35,
	},
	text_footer: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.accent,
		fontSize: 20,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: Colors.accentLight,
		paddingBottom: 5,
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
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: Colors.accent,
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		marginTop: 50,
	},
	button: {
		width: '90%',
	},
	buttonContent: {
		backgroundColor: Colors.primary,
		height: 50,
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
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5,
	},
	errorMsg: { color: '#FF0000', fontSize: 14 },
});

export default styles;
