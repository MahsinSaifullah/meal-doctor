import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/DetectedMealScreenStyles';

const DetectedMealScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Detected Meal Screen</Text>
			</Content>
		</Container>
	);
};

export default DetectedMealScreen;
