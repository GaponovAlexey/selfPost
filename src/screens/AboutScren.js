import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export function AboutScren({ navigation }) {


	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Home',
			headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-camera' />
			</HeaderButtons>,
			headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => navigation.toggleDrawer() } title='takePhoto1' iconName='ios-menu' />
			</HeaderButtons>
		})
	}, [])

	return (
		<View style={ styles.center } >
			<Text>lexa you the best</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	}
})
