import { StyleSheet, Dimensions, Platform } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const { height } = Dimensions.get('screen');
const height_logo = height * 0.1;

const styles = StyleSheet.create({
	screenContent: {
		flex: 1,
		backgroundColor: Colors.accent,
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: Platform.OS === 'android' ? 20 : 10,
	},
	userNameContainer: {
		marginTop: 20,
	},
	userNameText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
		color: Colors.bgWhite,
	},
	editIconContainer: {
		width: '100%',
		alignItems: 'flex-end',
		paddingHorizontal: 40,
	},
	footer: {
		flex: 2,
		backgroundColor: Colors.bgWhite,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 120,
		height: 120,
	},
	userInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: Colors.accent,
		width: '100%',
	},
	userInfoTextTitle: {
		marginRight: 20,
		fontFamily: Fonts.secondaryTitle,
		fontSize: 25,
		color: Colors.accent,
	},
	userInfoText: {
		fontFamily: Fonts.subtitle,
		fontSize: 20,
	},
});

export default styles;
