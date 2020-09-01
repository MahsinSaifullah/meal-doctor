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
		height: screenHeight >= 800 ? '50%' : '60%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.bgGrey,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: 'black',
		padding: 20,
	},
	modalTextContainer: {
		marginTop: 10,
		width: '100%',
		alignItems: 'center',
	},
	modalTitleTextContainer: {
		marginBottom: 20,
	},
	modalText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
		color: Colors.accent,
	},
	modalButtonContainer: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 20,
	},
	buttonContainer: {
		margin: 5,
		width: '40%',
	},
	button: {
		backgroundColor: Colors.primary,
	},
	buttonText: {
		fontFamily: Fonts.secondaryTitle,
	},
});

export default styles;
