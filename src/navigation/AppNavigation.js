import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScren } from '../screens/AboutScren';
import { THEME } from '../theme';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

export function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={ {
					headerMode: 'screen',
					headerStyle: { backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff' },
					headerTintColor: Platform.OS === 'android' ? "#fff" : THEME.MAIN_COLOR,
					headerTitleStyle: { fontFamily: 'OpenSans-Bold' },
				} }
			>
				<Stack.Screen name="Home"
					options={ { title: 'Главная' } }
					component={ MainScreen } />
				<Stack.Screen name="contact" options={ { title: 'POST' } } component={ PostScreen } />
				<Stack.Screen name="about" options={ { title: 'About' } } component={ AboutScren } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//options = { {
