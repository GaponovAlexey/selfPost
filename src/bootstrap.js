import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export async function bootstrap() {
	await Font.loadAsync({
		'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
		'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
	})
}