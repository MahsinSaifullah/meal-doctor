import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from '../styles/component/SearchTypeModalStyles';

const SearchTypeModal = ({ onManualSearch, onVisionSearch }) => {
	return (
		<View style={styles.modalContainer}>
			<View style={styles.modalCard}>
				<View style={styles.modalTextContainer}>
					<Text style={styles.modalText}>How do you want to Search?</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='🔍 Manual Search'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onManualSearch}
					/>
					<Button
						containerStyle={styles.buttonContainer}
						buttonStyle={styles.button}
						title='📷 Vision Search'
						type='solid'
						raised={true}
						titleStyle={styles.buttonText}
						onPress={onVisionSearch}
					/>
				</View>
			</View>
		</View>
	);
};

export default SearchTypeModal;
