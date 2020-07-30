import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/component/LoadingStyles';

const Loading = ({ prompt }) => {
	return (
		<View style={styles.componentContent}>
			<Image source={require('../../assets/loader.gif')} style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.text}>{prompt}...</Text>
			</View>
		</View>
	);
};

export default Loading;
