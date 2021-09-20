import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export async function bootstrap() {
	await Font.loadAsync({
		'open-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
		'open-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
	})
}