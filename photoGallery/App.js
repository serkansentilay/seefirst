import React, { useEffect, useReducer, useCallback, Suspense, lazy } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getList } from './api/picsum'
import { actionCreators, initialState, reducer } from './reducers/photo'
import PhotoGrid from './components/PhotoGrid'
//import PhotoDetails from './screens/PhotoDetails' // Detay sayfası
const PhotoDetails = lazy(()=> import('./screens/PhotoDetails'))

const Stack = createStackNavigator()

function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"  animating={true}/>
    </View>
  )
}

 function HomeScreen({navigation}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { photos, nextPage, loading, error } = state

  const fetchPhotos = useCallback(async () => {
    dispatch(actionCreators.loading())

    try {
      const nextPhotos = await getList(nextPage)
      dispatch(actionCreators.success(nextPhotos, nextPage))
      
     // const updatedPhotos = [...photos, ...nextPhotos]
     // await AsyncStorage.setItem('CACHED_PHOTOS', JSON.stringify(updatedPhotos))
     //useeffectin bagimliligina photos eklemek zorunlu eslint sartlar geregi
    } catch (e) {
      dispatch(actionCreators.failure())
    }
  }, [nextPage])


  useEffect(() => {
    const loadCachedPhotos = async () => {
      try {
          const pages = [1,2,3] //kac sayfa onbellekten yuklenecekse
          const loaded =[]
          for(let p of pages){
            const data = await AsyncStorage.getItem(`PHOTOS_PAGE_${p}`)
            if(data) loaded.push(...JSON.parse(data))
          }
        if(loaded.length > 0){
          dispatch({
            type:'SUCCESS',
            payload: {photos: loaded, page: pages.length +1}
          })
        }
      } catch (error) {
        console.log('cache load error',error)
      }
    }
    loadCachedPhotos()
    fetchPhotos()
  }, [])


/*
    // We'll show an error only if the first page fails to load
  if (photos.length === 0) {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
*/

if (loading && photos.length === 0) {
  return <LoadingView />
}

    if (error) {
      return (
        <View style={styles.container}>
          <Text>Failed to load photos!</Text>
        </View>
      )
    }
  

  return (
    <PhotoGrid 
    numColumns={3} 
    photos={photos} 
    onEndReached={fetchPhotos} 
    onPressPhoto={(photo) => navigation.navigate('Details', {photo})}
    />)
}
//Bileşen yüklenirken (özellikle lazy import edilen yani React.lazy() ile alınan bileşenlerde),
//Yüklenme süresi boyunca kullanıcıya bekleme animasyonu/fallback UI göstermek.


export default function App(){
  return (
    <NavigationContainer>
      <Suspense fallback={<LoadingView />}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={PhotoDetails} />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


