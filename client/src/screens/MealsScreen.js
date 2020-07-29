import React from 'react';
import { Container, Content, Text } from 'react-native';
import styles from '../styles/screen/MealsScreenStyles';

const MealsScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Meals Screen</Text>
			</Content>
		</Container>
	);
};

export default MealsScreen;
