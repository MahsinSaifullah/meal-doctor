import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/screen/TrackScreenStyles';
import Colors from '../constants/Colors';

const TrackScreen = () => {
	return (
		<Container>
			<Content contentContainerStyle={styles.screenContent}>
				<View style={styles.dateDisplayContainer}>
					<TouchableOpacity>
						<Ionicons name='md-calendar' size={20} color={Colors.primary} />
					</TouchableOpacity>
					<View style={styles.dateTextContainer}>
						<Text style={styles.dateText}>21 Jul 2020</Text>
					</View>
				</View>
			</Content>
		</Container>
	);
};

export default TrackScreen;
