import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, Button,  Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export function PostScreen({ navigation, route, }) {
	const postID = route.params.postID
	let bookeds = route.params.booked
	const deletPost = () => {
		Alert.alert(
			"DELETE",
			"are you realy?",
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{ text: "delete", style: 'destructive', onPress: () => { console.log('delet post') } }
			],
			{ cancelable: false }
		);
	}
	const post = DATA.find(e => e.id === postID)


	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'POST',
			headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-star' />
			</HeaderButtons>,
			headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-menu' />
			</HeaderButtons>
		})
	}, [])

	return (
		<ScrollView >
			<Image style={ styles.img } source={ { uri: post.img } } />
			<View style={ styles.textWraper } ><Text style={ styles.onlytext }>{ post.text.repeat(100) }</Text></View>
			<Button title='delet' color={ THEME.DANGER_COLOR } onPress={ deletPost } />
		</ScrollView >
	)
}


const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 200,
	},
	textWraper: {
		padding: 10,

	},
	onlytext: {
		fontFamily: ''
	}
})
