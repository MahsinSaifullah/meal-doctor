import { StyleSheet } from 'react-native';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
	componentContent: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleTextContainer: {
		marginTop: 10,
	},
	titleText: {
		fontFamily: Fonts.mainTitleFont,
		fontSize: 35,
		color: Colors.primary,
	},
});

export default styles;
