import AsyncStorage from '@react-native-community/async-storage';

const removeTokenFromStorage = async () => {
	try {
		await AsyncStorage.removeItem('token');
	} catch (error) {
		console.log(error.message);
	}
};

export default removeTokenFromStorage;
