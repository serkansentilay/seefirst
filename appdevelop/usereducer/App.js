//A "container" component, App, that connects our application/business logic for 
// adding and removing To-Do items with our UI components
//3 "presentational" components that we use to display our UI: List, Input, and Title
//A todos file that contains the initial state of our app and a reducer function for
//  updating the state


import React, { useReducer } from 'react'
import { View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'
import { actionCreators, reducer, initialState } from './todos'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

    //useReducer ile iki şey alıyoruz:
    //state: Uygulamanın mevcut durumu (örneğin: items listesi)
    //dispatch: Reducer’a bir action göndermek için kullanılan fonksiyon.
    //reducer: Gelen action'a göre state'i nasıl değiştireceğimizi tanımlar.
    //initialState: Başlangıç verileri (ilk yapılacaklar listesi gibi).

  return (
    <View>
      <Title>To-Do List</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
        //placeholder: Giriş kutusunda gösterilecek ipucu yazısı.
        //onSubmitEditing: Kullanıcı enter’a bastığında tetiklenir.
        //dispatch(...) ile reducer’a bir ADD action gönderilir.
        //actionCreators.add(title) → { type: 'ADD', payload: { id, title } }

      />
      
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}
