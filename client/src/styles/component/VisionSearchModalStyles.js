import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

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
		borderColor: Colors.accent,
		borderWidth: 2,
		borderColor: 'black',
		padding: 20,
	},
	modalTextContainer: {
		marginTop: 10,
	},
	modalText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 30,
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
	},
	buttonText: {
		fontFamily: Fonts.secondaryTitle,
	},
});

export default styles;
