import { Audio } from 'expo-av';

const soundObjects = {};

class Player {
	static async load(library) {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
			shouldDuckAndroid: true,
			staysActiveInBackground: true,
			// playThroughEarpieceAndroid: true,
		});
		const promisedSoundObjects = [];

		for (const name in library) {
			const sound = library[name];

			soundObjects[name] = new Audio.Sound();

			promisedSoundObjects.push(soundObjects[name].loadAsync(sound));
		}

		return promisedSoundObjects;
	}

	static async playSound(name) {
		try {
			if (soundObjects[name]) {
				await soundObjects[name].replayAsync();
			}
		} catch (error) {
			console.warn(error);
		}
	}
	static async stopSound(name) {
		try {
			if (soundObjects[name]) {
				await soundObjects[name].stopAsync();
			}
		} catch (error) {
			console.warn(error);
		}
	}
}

export default Player;
