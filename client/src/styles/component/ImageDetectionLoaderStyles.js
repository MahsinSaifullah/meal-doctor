import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContent: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: 100,
		width: 100,
	},
	textContainer: {
		marginTop: 20,
	},
	text: {
		fontFamily: Fonts.mainTitleFont,
		color: Colors.primary,
		fontSize: 30,
	},
});

export default styles;
