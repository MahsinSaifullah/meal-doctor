import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/MindfulEatingScreenStyles';

const MindfulEatingScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Mindful Eating</Text>
			</Content>
		</Container>
	);
};

export default MindfulEatingScreen;
