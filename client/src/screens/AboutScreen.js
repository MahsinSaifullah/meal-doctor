import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/AboutScreenStyles';

const AboutScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>About Screen</Text>
			</Content>
		</Container>
	);
};

export default AboutScreen;
