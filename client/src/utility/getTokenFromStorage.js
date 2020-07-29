import AsyncStorage from '@react-native-community/async-storage';

const getTokenFromStorage = async () => {
	try {
		return await AsyncStorage.getItem('token');
	} catch (error) {
		console.log(error.message);
		return;
	}
};

export default getTokenFromStorage;
