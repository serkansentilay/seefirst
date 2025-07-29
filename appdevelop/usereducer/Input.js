import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input({ placeholder, onSubmitEditing }) {
  const [text, setText] = useState('')
    //placeholder: Input kutusunda gri renkte görünen geçici yazı.
    //onSubmitEditing: Kullanıcı "Enter" tuşuna bastığında çalışacak fonksiyon.

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return // Don't submit if empty

        onSubmitEditing(text) // dışarıdan gelen callback’i çağır
        setText('')
      }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})
