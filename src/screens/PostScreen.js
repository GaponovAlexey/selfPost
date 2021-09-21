import React, { useEffect, useState } from 'react'
import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'

export function PostScreen({ navigation, route, }) {
	const postID = route.params.postID
	let bookeds = route.params.booked
	const backHandler = () => {
		Alert.alert(
			"DELETE",
			"are you realy?",
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{ text: "delete", style: 'destructive', onPress: () => { } }
			],
			{ cancelable: false }
		);
	}
	const post = DATA.find(e => e.id === postID)

	return (
		<ScrollView >
			<Image style={ styles.img } source={ { uri: post.img } } />
			<View style={ styles.textWraper } ><Text style={ styles.onlytext }>{ post.text.repeat(100) }</Text></View>
			<Button title='delet' color={ THEME.DANGER_COLOR } onPress={ backHandler } />
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
