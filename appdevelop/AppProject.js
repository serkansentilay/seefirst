//navigation
/*
import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Root = createStackNavigator()

const Screen1 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Screen2')
      }}
    />
  </View>
)
const Screen2 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop()
      }}
    />
  </View>
)

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
})

*/

//1. Create a navigator
//We first choose one of the available navigators, e.g. stack, which will act 
// as our root navigator. Navigators may be nested later.

//import { createStackNavigator } from '@react-navigation/stack'
//const Root = createStackNavigator()

//2. Create screen components
//Next, we create a component for each screen.
//Screens are regular React components. They'll be passed navigation-specific
//  props when instantiated.

//const Screen1 = ({ navigation, route }) => {
//  return <Text>Screen1</Text>
//}

//3. Render it
//Lastly, we render a NavigationContainer with our navigator within it.
//Each Screen component defines a route in our app. If we want nested navigators,
//  e.g. a tab navigator within a stack navigator, we can use another navigator 
// as a screen's component.
//We only need a single NavigationContainer, even if we have nested navigators.

//import { NavigationContainer } from '@react-navigation/native'

//const App = () => {
//  return (
//    <NavigationContainer>
//      <Root.Navigator>
//        <Root.Screen name="Screen1" component={Screen1} />
//        <Root.Screen name="Screen2" component={Screen2} />
//        <Root.Screen name="Screen3" component={Screen3} />
//      </Root.Navigator>
//    </NavigationContainer>
//  )
//}

//Navigating and Routes
//Each navigator supports different ways of navigating:
//Stack: push
//Tabs: navigate
//Drawer: openDrawer
//When navigating, we typically specify a screen name and optionally parameters,
// e.g. navigator.push("Screen2", { paramA: "Hello!" }).


//Navigation
//In this example, we navigate from Screen1 to Screen2 by pushing Screen2 
// onto the stack when a button is pressed.

//const Screen1 = ({ navigation }) => {
//  return (
//    <Button
//      onPress={() => {
//        navigation.push('Screen2', { paramA: 'Hello!' })
//      }}
//    />
// )
//}


//Routes
//Within a screen, we have access to the current route and its parameters.

//const Screen2 = ({ route }) => {
//  return <Text>{route.params.paramA}</Text>
//}

//Hooks
//For components which aren't screens (direct descendants of a navigator), 
// we can access the navigation and route objects using hooks.
//Some developers prefer using these hooks instead of props, even in screen components.

//import { useNavigation, useRoute } from '@react-navigation/native'

//const Screen1 = () => {
//  const navigation = useNavigation()
//  const route = useRoute()
//}

//Common options for managing data
//useReducer	React provides a hook for storing data. This is a great place to start.

//Redux	Redux provides a store object which maintains the application state, and can 
// notify our React components when state changes. Redux was designed with React in mind,
//  and has official React bindings: React Redux. There are additional tools around Redux 
// to provide: control over asynchronous events, data persistence (for offline usage, etc),
//  and more powerful debugging.

//MobX	State management through "functional reactive programming". MobX was designed for
//  use with React, and provides utilities like observables to manage state changes.

//Realm	The Realm library uses a custom database, written from scratch in C to be compatible
//  on both iOS and Android. Realm is suitable for apps with a tremendous amount of data 
// (10,000+ records). If an app can't fit all its data in RAM, using a database makes it
// easy to page records in and out, or search without loading all data into memory.


/*
Reducer patterns

While useReducer doesn't enforce any particular types/shapes for states and actions,
 there are a few that are common when managing medium/large quantities of data:

The actions we pass to the reducer are objects containing a type and payload
We often define constants for the type, enumerating every action our reducer function 
knows how to handle
We expose actionCreator functions that abstract the details of our action objects from 
the rest of the app
Our state is an object, so that we can add fields to it easily as our app grows
These patterns help keep the reducer code self-contained for each kind of entity in our 
app (e.g todos, posts, photos).


Reducer kalıpları (patterns)
useReducer, durumlar (state) ve eylemler (action) için belirli bir tür veya yapı 
zorunluluğu getirmez, ancak orta/büyük miktarda veri yönetirken sıkça kullanılan bazı 
yaygın kalıplar vardır:

Reducer'a gönderdiğimiz eylemler (actions) genellikle type ve payload içeren nesnelerdir.
Reducer fonksiyonumuzun hangi eylemleri işleyebileceğini belirtmek için, genellikle her type
 için sabit (constant) tanımlarız.
Uygulamanın geri kalanında eylem nesnelerinin detaylarını soyutlamak için action creator 
fonksiyonları kullanırız.
Durumumuz (state) bir nesne (object) olarak tanımlanır; böylece uygulamamız büyüdükçe kolayca 
alan (field) ekleyebiliriz.
Bu kalıplar, uygulamamızdaki her varlık türü (örneğin: yapılacaklar, gönderiler, fotoğraflar) 
için reducer kodunu kendi içinde düzenli ve kapsayıcı tutmaya yardımcı olur.
*/
