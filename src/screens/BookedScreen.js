import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostList from '../components/PostList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { useSelector } from 'react-redux'

export function BookedScreen({ navigation, route }) {
	const DATA = useSelector(state => state.post.allPosts)
	const postSc = (post) => {
		navigation.push('postScreen', { postID: post.id, booked: post.booked, })
	}


	const booked = DATA.filter(p => p.booked)

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
			<PostList data={ booked } onOpen={ postSc } />
		</View>
	)
}

const styles = StyleSheet.create({
	center: {

	}
})
