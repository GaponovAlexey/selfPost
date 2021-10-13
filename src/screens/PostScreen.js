import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { removePost, ToogleBooked } from '../redux/PostReducer'



import { THEME } from '../theme'

export function PostScreen({ navigation, route, }) {
	const DATA = useSelector(state => state.post.allPosts)
	const postID = route.params.postID
	const deletPost = () => {
		Alert.alert(
			"DELETE",
			"are you realy?",
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{ text: "delete", style: 'destructive', onPress: () => dispatch(removePost(postID)) }
			],
			{ cancelable: false }
		);
	}
	const post = DATA.find(e => e.id === postID)

	const dispatch = useDispatch()
	const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postID))

	const toogleHandler = () => {
		useEffect(() => {
			dispatch(ToogleBooked(postID))
		}, [dispatch, postID ])
	}



	const iconName = booked ? 'ios-star' : 'ios-star-outline'
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'POST',
			headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => toogleHandler } title='takePhoto1' iconName={ iconName } />
			</HeaderButtons>,
			headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => navigation.toggleDrawer() } title='takePhoto1' iconName='ios-menu' />
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
	}
})
