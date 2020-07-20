import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/ProfileScreenStyles';

const ProfileScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Profile Screen</Text>
			</Content>
		</Container>
	);
};

export default ProfileScreen;
