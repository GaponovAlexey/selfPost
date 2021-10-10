import React, { useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'


export function AboutScren({ navigation }) {


	return (
		<ScrollView  >
			<View style={ styles.center }  >
				<Text>da</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	center: {
		padding: 10,
		borderRadius: 11,
	},
	img: {
		width: '100%',
		height: 200,
	}
})
