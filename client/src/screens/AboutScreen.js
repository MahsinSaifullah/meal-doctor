import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from '../styles/screen/AboutScreenStyles';

const AboutScreen = () => {
	return (
		<View style={styles.screenContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.headerContainer}>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../assets/aboutIcon.png')}
							style={styles.image}
						/>
					</View>
					<View style={styles.titleContainer}>
						<Text style={styles.titleText}>How to use the App?</Text>
					</View>
				</View>
				<View style={styles.subtitleContainer}>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>
							😊 Right before a meal press the '+' button{' '}
						</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>😉 Choose a search method</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>😁 Pick the correct meal</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>
							🤗 Fill in all the meal details
						</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>
							😋 Try the mindful eating experience
						</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>
							🤩 Recieve Mindfulness Score
						</Text>
					</View>
					<View style={styles.subtitleTextContainer}>
						<Text style={styles.subtitleText}>
							🤭 Take your time, to get a Higher score
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default AboutScreen;
