import React, { useState } from 'react'
import { StyleSheet, Text, Image, Button, View } from 'react-native'

export default function PhotoPiker() {
	const takePhoto = () => { }
	const [image, setImage] = useState(null)
	return (
		<View style={ styles.wraper } >
			<Button title='сделать фото' onPress={ takePhoto } />
			{image && <Image style={styles.image} source={{uri: image}} /> }
		</View>
	)
}

const styles = StyleSheet.create({
	wraper: {

	},
	img: {
		width: '100%',
		height: 10,
		marginTop: 10
	}
})
