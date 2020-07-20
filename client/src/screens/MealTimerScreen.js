import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/MealTimerScreenStyles';

const MealTimerScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Meal Timer Screen</Text>
			</Content>
		</Container>
	);
};

export default MealTimerScreen;
