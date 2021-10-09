import React, { useLayoutEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

import { Post } from '../components/Post'
import { DATA } from '../data'


export function MainScreen({ navigation }) {
	console.log(navigation);
	const openPostHandler = (post) => {
		navigation.push('postScreen', {postID: post.id, booked: post.booked, })
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Home',
			headerRight: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-camera' />
			</HeaderButtons>,
			headerLeft: () => <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
				<Item onPress={ () => console.log('you') } title='takePhoto1' iconName='ios-menu' />
			</HeaderButtons>
		})
	}, [])



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
