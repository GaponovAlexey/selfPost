import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScren } from '../screens/AboutScren';
import { THEME } from '../theme';
import { Platform, Text } from 'react-native';
import {
	HeaderButtons,
	HeaderButton,
	Item,
	HiddenItem,
	OverflowMenu,
} from 'react-navigation-header-buttons';

import { AppHeaderIcon } from '../components/AppHeaderIcon'
const Stack = createNativeStackNavigator();



let postScreenOption = {
	title: 'Главная',
	headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
		<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-camera' />
	</HeaderButtons>,
}




export function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={ {
					headerMode: 'screen',
					headerStyle: { backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff' },
					headerTintColor: Platform.OS === 'android' ? "#fff" : THEME.MAIN_COLOR,
					headerTitleStyle: { fontFamily: 'open-Bold' },
				} }
			>
				<Stack.Screen name="Home"
					options={ postScreenOption }
					component={ MainScreen } />
				<Stack.Screen name="postScreen" options={ { title: 'POST' } } component={ PostScreen } />
				<Stack.Screen name="about" options={ { title: 'About' } } component={ AboutScren } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//options = { {
