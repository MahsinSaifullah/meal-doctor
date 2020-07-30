import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContainer: {
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 10,
		borderColor: Colors.accent,
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginBottom: 10,
	},
	label: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 20,
		color: Colors.accent,
	},
});

export default styles;
