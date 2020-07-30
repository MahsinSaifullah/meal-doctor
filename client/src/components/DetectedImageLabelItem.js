import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from 'react-native';

import styles from '../styles/component/DetectedImageLabelItemStyles';

const DetectedImageLabelItem = ({ label }) => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21)
		TouchableComp = TouchableNativeFeedback;

	return (
		<TouchableComp style={{ width: '100%' }}>
			<View style={styles.componentContainer}>
				<Text style={styles.label}>{label}</Text>
			</View>
		</TouchableComp>
	);
};

export default DetectedImageLabelItem;
