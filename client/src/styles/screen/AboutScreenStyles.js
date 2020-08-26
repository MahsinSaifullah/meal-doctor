import { StyleSheet, Dimensions } from 'react-native';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	iconContainer: {
		marginLeft: 10,
	},
	image: {
		resizeMode: 'cover',
		width: 250,
		height: 250,
	},
	headerContainer: {
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleContainer: {
		marginTop: 20,
	},
	titleText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
		color: Colors.accent,
	},
	subtitleContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	subtitleTextContainer: {
		marginBottom: 20,
	},
	subtitleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 20,
		color: Colors.accentLight,
	},
});

export default styles;
