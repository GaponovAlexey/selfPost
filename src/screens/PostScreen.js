import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function PostScreen({ navigation, route }) {
	const postId = route.params.postID
	const back = () => {
		navigation.goBack()
	}
	const [state, setState] = useState([
		{ id: '1', anons: 'google', full: 'google big company' },
		{ id: '2', anons: 'apple', full: 'apple big company' },
		{ id: '3', anons: 'yandex', full: 'yandex big company' },
	])

	return (
		<View style={ styles.center } >
			<Text>{ postId }</Text>
			<FlatList data={ state }
				key={ itme => itme.id }
				renderItem={ ({ item }) => (
					<TouchableOpacity

						onPress={ () => navigation.navigate('about', item) }
					>
						<View style={ styles.cont } >
							<Text>{ item.anons }</Text>
							<Button title='back' onPress={ back } />
						</View>
					</TouchableOpacity>
				) } />
		</View >
	)
}


const styles = StyleSheet.create({
	center: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
	}, cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingEnd: 10,
		paddingStart: 10,
		padding: 5,
		marginBottom: 5,
		elevation: 3,
		borderRadius: 7,
		backgroundColor: '#ccc'

	}
})
