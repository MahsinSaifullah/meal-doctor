import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalCard: {
		height: '40%',
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.bgWhite,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: 'black',
		padding: screenHeight >= 700 ? 20 : 15,
	},
	modalTextContainer: {
		marginTop: 10,
	},
	modalText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 28,
		color: Colors.accent,
	},
	modalButtonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	buttonContainer: {
		margin: 5,
	},
	button: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 20,
	},
	buttonText: {
		fontFamily: Fonts.secondaryTitle,
	},
});

export default styles;
