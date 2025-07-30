/*
APIs

Networking in React Native is built on two APIs: fetch and XMLHttpRequest. Both of these were designed to be compatible with browser APIs so that:

Web developers don't have to learn a new way to make network requests
Libraries built on top of these function as expected in React Native
It's common to use the fetch API directly, since it's fairly powerful and high-level. It's rare to use XMLHttpRequest directly, since it's complex and low-level. If your networking needs are advanced (multi-part form requests, etc), you'll likely want to use a library that abstracts the details of these networking APIs.

If you're looking for an abstraction layer, browser/node networking libraries like axios and superagent will still work in React Native.


const response = await fetch(uri)

Send a GET request to uri, returning a promise which represents a Response object. 
To access the data returned, you must either await response.text() or response.json().

const json = await response.json()

Parse the body of the response asynchronously as JSON.

const text = await response.text()

Get the body of the response as text.


*/

import React, { useEffect, useReducer } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { actionCreators, initialState, reducer } from './posts'

export default function App(){
    const [state, dispatch] =useReducer(reducer, initialState)

    useEffect(()=> {
        async function fetchPosts(){
            dispatch(actionCreators.loading())

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const posts = await response.json()
                dispatch(actionCreators.success(posts))
            } catch (error) {
                dispatch(actionCreators.failure())
            }
        }
        fetchPosts()
    },[])


    const {posts, loading, error} =state

    if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load posts!</Text>
      </View>
    )
  }

  return (
    <FlatList
    style={styles.container}
    keyExtractor={(post)=> post.id}
    data={posts}
    renderItem={({item: {id, title, body }, index}) => (

        <View key={id} style={styles.post}>
            <Text style={styles.title}>
                {index}.{title}
            </Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    )}
    >


    </FlatList>
  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ACDA5',
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    color: '#F8F8F8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
