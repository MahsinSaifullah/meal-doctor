import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

import styles from '../styles/screen/ImageDetectedScreenStyle';
import Colors from '../constants/Colors';
import DetectedImageLabelItem from '../components/DetectedImageLabelItem';
import Loading from '../components/Loading';

const ImageDetectedScreen = ({ navigation }) => {
	const labels = useSelector((state) => state.detection.detectedImageLabels);
	const awsImageUri = useSelector((state) => state.detection.awsImageUrl);

	if (labels.length > 0) {
		return (
			<View style={styles.screenContent}>
				<Animatable.View style={styles.header} animation='fadeIn'>
					<ImageBackground
						source={{ uri: awsImageUri }}
						style={{ width: '100%', height: '100%' }}
					>
						<View style={styles.screenTitleContainer}>
							<View style={styles.screenTitleTextContainer}>
								<Text style={styles.screenTitleText}>Detected Image</Text>
							</View>
						</View>
					</ImageBackground>
				</Animatable.View>

				<Animatable.View style={styles.footer} animation='fadeIn'>
					<Text style={styles.footerTitleText}>Choose the closest one</Text>
					<Feather name='chevrons-down' size={30} color={Colors.accentLight} />
					<ScrollView style={{ width: '90%' }}>
						<Animatable.View
							style={styles.labelItemContainer}
							animation='fadeInDownBig'
						>
							{labels.map((label, i) => {
								return <DetectedImageLabelItem key={i} label={label} />;
							})}
						</Animatable.View>
						<View style={styles.manualSearchContainer}>
							<Button
								containerStyle={styles.buttonContainer}
								buttonStyle={styles.button}
								title='Manual Search'
								type='solid'
								raised={true}
								titleStyle={styles.buttonText}
								onPress={() => {}}
							/>
						</View>
					</ScrollView>
				</Animatable.View>
			</View>
		);
	} else {
		return <Loading prompt='DETECTING' />;
	}
};

export default ImageDetectedScreen;
