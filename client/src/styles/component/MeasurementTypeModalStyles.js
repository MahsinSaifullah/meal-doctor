import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	modalCard: {
		height: screenHeight >= 800 ? '80%' : '100%',
		width: '100%',
		alignItems: 'center',
		backgroundColor: Colors.bgWhite,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: 'black',
		padding: screenHeight >= 800 ? 20 : 15,
	},
	modalTextContainer: {
		marginTop: 10,
	},
	modalText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 28,
		color: Colors.accent,
	},
	modalItemContainer: {
		marginTop: 20,
		width: '100%',
	},
	unitLableContainer: {
		padding: 15,

		borderRadius: 10,
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	unitLableText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 20,
		color: Colors.accent,
	},
});

export default styles;
