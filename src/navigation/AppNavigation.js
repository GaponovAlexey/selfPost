import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScren } from '../screens/AboutScren';
import { THEME } from '../theme';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BookedScreen } from '../screens/BookedScreen';




const Stack = createNativeStackNavigator();
function StakMain() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={ MainScreen } />
			<Stack.Screen name="postScreen" component={ PostScreen } />
			<Stack.Screen name="about" options={ { title: 'About' } } component={ AboutScren } />
		</Stack.Navigator>
	);
}
function StakAbout() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="about" options={ { title: 'About' } } component={ BookedScreen } />
			<Stack.Screen name="postScreen" component={ PostScreen } />
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();
function Tabs() {
	return (
		<Tab.Navigator screenOptions={ { headerShown: false } } >
			<Tab.Screen
				options={ {
					tabBarIcon: () => <Ionicons name="cash" size={ 24 } color="black" />
				} }
				name="Home"
				component={ StakMain } />
			<Tab.Screen
				options={ {
					tabBarIcon: () => <Ionicons name="star" size={ 24 } color="black" />
				} }
				name="Star"
				component={ StakAbout } />
		</Tab.Navigator>
	);
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator screenOptions={ { headerShown: false } } >
			<Drawer.Screen name="Home" component={ Tabs } />
			<Drawer.Screen name="Star" component={ Tabs } />
		</Drawer.Navigator>
	);
}



export const Navigatopr = () => {
	return (
		<NavigationContainer>
			<MyDrawer />
		</NavigationContainer >
	)
}