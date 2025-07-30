import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { formatPhotoUri } from '../api/picsum'

export default function PhotoDetails({ route }) {
  const { photo } = route.params
  const { width } = Dimensions.get('window')
  const imageHeight = width * 1.2

  return (
    <View style={styles.container}>
      <Image
        
        source={{ uri: formatPhotoUri(photo.id, width, imageHeight) }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Author: {photo.author}</Text>
      <Text style={styles.text}>ID: {photo.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 16,
  },
  image: {
    width: '90%',
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  },
})
