import React from 'react'
import { Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'

import { formatPhotoUri } from '../api/picsum'

export default function PhotoGrid({ photos, numColumns, onEndReached , onPressPhoto}) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>onPressPhoto(item)}>
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
          style={{width: size, height: size}}
          resizeMode='cover'
        />
        </TouchableOpacity>
      )}
    />
  )
}
