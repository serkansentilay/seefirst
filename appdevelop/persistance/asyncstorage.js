//Persistence
//Client-side data persistence is often crucial to a great mobile experience:
//  remembering a user's preferences and credentials, and showing data
//  immediately when the app starts, instead of showing a spinner while fetching data remotely.
//Generally, there are two ways to persist data on the client:
//The built-in AsyncStorage API, or libraries wrapping it
//A native database with JavaScript bindings

//İstemci tarafında (client-side) veri kalıcılığı, harika bir mobil deneyim için çoğu 
// zaman çok önemlidir:
//Kullanıcının tercihlerini ve giriş bilgilerini hatırlamak,
//ve uygulama başlatıldığında verileri hemen göstermek (uzaktan veri çekilirken bir 
// yükleme simgesi göstermek yerine).


//AsyncStorage	AsyncStorage is a simple, low-level API for a key-value store.
//  You can easily store and retrieve key-value pairs.

//Redux Persist	If you're using Redux, consider using Redux Persist, a library 
// for automatically persisting the state of your Redux store to AsyncStorage on 
// store changes, and rehydrating the store with this saved state when the app launches.
//Eğer Redux kullanıyorsanız, Redux Persist kullanmayı düşünebilirsiniz.
//Redux Persist, store (durum deposu) her değiştiğinde, bu durumu otomatik olarak 
// AsyncStorage'a kaydeden
//ve uygulama başlatıldığında bu kaydedilen durumu geri yükleyen (rehydrate eden) bir kütüphanedir.



//Realm	The Realm library uses a custom database, written from scratch in C to be 
// compatible on both iOS and Android. We already mentioned Realm under Data Management, 
// but if you're using Realm for managing your data, you get persistence for free!

/*
API

The AsyncStorage API is promise-based. Getting and setting key-value pairs is 
asynchronous. All of the APIs can throw errors upon failure, which you'll want to handle!

The main APIs are:

getItem(key: string) - Get the value stored at key. This will return a Promise 
containing a string, or null if no data has been stored yet for that key.
setItem(key: string, value: string) - Store the value at key, replacing any 
existing value stored there.
These two APIs are frequently all you'll need, although there are more APIs for
 getting/setting multiple values and merging values if you have more advanced needs.

The API operates on strings, but typically you'll use JSON: remember to call 
JSON.stringify before storing data and JSON.parse after retreiving it.

AsyncStorage API’si promise tabanlıdır.
Anahtar-değer çiftlerini alma ve kaydetme işlemleri asenkron şekilde gerçekleşir.
Tüm API’ler, bir hata durumunda hata fırlatabilir, bu yüzden bunları yakalamalı 
(handle etmeli) ve ele almalısınız!

🔹 Ana API’ler şunlardır:
getItem(key: string) – Belirtilen anahtarda (key) saklanan değeri alır.
Bu, bir Promise döner ve içinde bir string veya eğer veri yoksa null bulunur.
setItem(key: string, value: string) – Belirtilen anahtara değeri kaydeder.
Aynı anahtarda zaten bir değer varsa, onu değiştirir.
Genellikle bu iki API çoğu kullanım için yeterlidir,
ancak daha gelişmiş ihtiyaçlarınız varsa, birden çok değeri alma/kaydetme ve 
verileri birleştirme gibi işlemler için başka API’ler de mevcuttur.

🔹 Not:
API string’ler üzerinde çalışır,
ama genellikle JSON kullanmanız gerekir:

Veri kaydetmeden önce: JSON.stringify(...)
Veriyi aldıktan sonra: JSON.parse(...)
Böylece nesneleri ve dizileri saklayabilir veya okuyabilirsiniz.
*/

/*
This app contains:

An App component thats loads the value at STORAGE_KEY into name using useState 
when it mounts. Every time you type your name in the input field and hit enter, 
we save name to STORAGE_KEY, as well as updating the value in name. Note that 
we also catch errors thrown when loading/saving.
Input.js, a presentational TextInput-based component

*/

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet , SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Input from './Input'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

export default function App(){
    const [name, setname] =useState('dfsdf')

    async function loadName(){
        try {
            const name = await AsyncStorage.getItem(STORAGE_KEY)
            if(name === null) return 

            setname(name)

        } catch (error) {
            console.error('failed to load name')
        }
    }

    async function saveName(name){
        try {
            await AsyncStorage.setItem(STORAGE_KEY,name)
            setname(name)
        } catch (error) {
            console.error("failed to save name")
        }
    }

    useEffect(()=>{
        loadName()
    },[])


    return (
        <SafeAreaView>
            <View>
                <Input 
                placeholder={"type ur name, hit enter and refresh it"}
                onSubmitEditing={(value)=> {
                    saveName(value)
                }}
                />
                <Text style={styles.text} >hello {name}</Text>
            </View>
        </SafeAreaView>
    )

    
}
const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: '#EEB',
  },
})