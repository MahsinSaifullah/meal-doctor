import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/ProfileScreenStyles';

import Colors from '../constants/Colors';

const ProfileScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Meals Screen</Text>
			</Content>
		</Container>
	);
};

export default ProfileScreen;
