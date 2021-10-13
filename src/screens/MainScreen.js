import React, { useEffect, useLayoutEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Post } from '../components/Post'
import { ActionPost } from '../redux/PostReducer';


export function MainScreen({ navigation }) {
	const openPostHandler = (post) => {
		navigation.push('postScreen', { postID: post.id, booked: post.booked, })
	}
	const dispatch = useDispatch()



	useLayoutEffect(() => {
		dispatch(ActionPost())
	}, [])

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


	const DATA = useSelector(state => state.post.allPosts)
	
	return (
		<View style={ styles.center } >
			<FlatList
				data={ DATA }
				keyExtractor={ post => post.id.toString() }
				renderItem={ ({ item }) => {
					return <Post post={ item } onOpen={ openPostHandler } />
				} }
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		padding: 10,
	}
})
