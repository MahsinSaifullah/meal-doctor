import React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from '../styles/screen/SelectMealScreenStyles';

const SelectMealScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<Text>Select Meal Screen</Text>
			</Content>
		</Container>
	);
};

export default SelectMealScreen;
