import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	componentContainer: {
		width: '90%',
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	avatarContainer: {
		flex: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 10,
	},
	avatar: {
		borderRadius: 10,
		borderWidth: 2,
		borderColor: Colors.primary,
		overflow: 'hidden',
	},
	mealDetailContainer: {
		flex: 3,
		marginHorizontal: 5,
	},
	mealTitleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 22,
		color: Colors.accent,
	},
	mealSubtitleText: {
		fontFamily: Fonts.secondaryTitle,
		fontSize: 15,
		color: Colors.accentLight,
	},
	mealSubtitleValue: {
		fontFamily: Fonts.subtitle,
		color: Colors.accentLight,
		fontSize: 12,
	},
	nutrientDetailContainer: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nutrientValueContainer: {
		padding: 3,
		borderWidth: 1,
		borderRadius: 10,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nutrientTitleText: {
		fontFamily: Fonts.secondaryTitle,
		color: Colors.bgWhite,
	},
	nutrientSubtitleText: {
		fontFamily: Fonts.subtitle,
		color: Colors.bgWhite,
	},
});

export default styles;
