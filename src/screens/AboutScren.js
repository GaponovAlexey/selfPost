import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AboutScren({ route }) {
	return (
		<View style={ styles.center } >
			<Text>{route.params.full}</Text>
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
