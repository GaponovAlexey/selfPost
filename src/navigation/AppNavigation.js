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



const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={ MainScreen } />
			<Tab.Screen name="postScreen" component={ PostScreen } />
		</Tab.Navigator>
	);
}


const Stack = createNativeStackNavigator();
//mainScreen
let MainScreenOption = {
	title: 'Главная',
	headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
		<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-camera' />
	</HeaderButtons>,
	headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
		<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-menu' />
	</HeaderButtons>,
}

//postScreen
let PostScrennOption = {
	title: 'POST',
	headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
		<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-star' />
	</HeaderButtons>,
	headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
		<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-menu' />
	</HeaderButtons>,
}
//Header
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
				<Stack.Screen name="Home" options={ MainScreenOption } component={ MainScreen } />
				<Stack.Screen name="postScreen" options={ PostScrennOption } component={ PostScreen } />
				<Stack.Screen name="about" options={ { title: 'About' } } component={ AboutScren } />
			</Stack.Navigator>
		</NavigationContainer >
	);
}

//options = { {
