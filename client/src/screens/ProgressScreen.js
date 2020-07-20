import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/ProgressScreenStyles';

const ProgressScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Progress Screen</Text>
			</Content>
		</Container>
	);
};

export default ProgressScreen;
