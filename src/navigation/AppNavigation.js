import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScren } from '../screens/AboutScren';
import { THEME } from '../theme';
import { Platform, Text } from 'react-native';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item, } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack = createNativeStackNavigator();
//Header
function MyStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={ {
				headerMode: 'screen',
				headerStyle: { backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff' },
				headerTintColor: Platform.OS === 'android' ? "#fff" : THEME.MAIN_COLOR,
				headerTitleStyle: { fontFamily: 'open-Bold' },
			} }
		>
			<Stack.Screen name="Home" component={ MainScreen } />
			<Stack.Screen name="postScreen" component={ PostScreen } />
			<Stack.Screen name="about" options={ { title: 'About' } } component={ AboutScren } />
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={ { headerShown: false } }
		>
			<Tab.Screen name="Home" component={ MyStack } />
			<Tab.Screen name="postScreen" component={ PostScreen } />
		</Tab.Navigator>
	);
}



export const Navigatopr = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer >
	)
}