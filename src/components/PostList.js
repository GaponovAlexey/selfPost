import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Item } from 'react-navigation-header-buttons'
import { Post } from './Post'

export default function PostList({ data, onOpen }) {
	return (
		<View style={ styles.wrap }>
			<FlatList
				data={ data }
				keyExtractor={ item => item.id.toString() }
				renderItem={ ({ item }) => <Post post={ item } onOpen={ onOpen } /> }
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		padding: 10,
	}
})
