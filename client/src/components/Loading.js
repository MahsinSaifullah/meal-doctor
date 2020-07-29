import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from '../styles/component/LoadingStyles';
import Colors from '../constants/Colors';

const Loading = () => {
	return (
		<View style={styles.componentContent}>
			<ActivityIndicator size='large' color={Colors.primary} />
		</View>
	);
};

export default Loading;
