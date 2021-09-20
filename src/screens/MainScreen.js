import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../components/Post'
import { DATA } from '../data'

export function MainScreen({ navigation }) {

	const openPostHandler = (post) => {
		navigation.push('postScreen', {postID: post.id })
	}

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
