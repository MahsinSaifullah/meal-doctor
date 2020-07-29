import AsyncStorage from '@react-native-community/async-storage';

const setTokenToStorage = async (token) => {
	try {
		await AsyncStorage.setItem('token', token);
	} catch (error) {
		console.log(error.message);
	}
};

export default setTokenToStorage;
