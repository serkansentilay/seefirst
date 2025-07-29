//view
import React, {useState} from 'react'
import { View,Image,FlatList,SectionList, ScrollView,StyleSheet,SafeAreaView, TouchableHighlight,TouchableOpacity,Text, Button } from 'react-native'
import Toggle from './Toggle'

/*
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
})
*/


//layout

/*
flexDirection	column	row, column	Do we want a vertical (column) or horizontal (row) layout?
 This choice determines the orientation of the primary axis of our layout.

justifyContent	flex-start	flex-start, center, flex-end, space-around, 
space-between	How should the content be distributed along the primary axis of our layout?
 Should it be at the start, the center, the end, or spaced evenly?


alignItems	stretch	flex-start, center, flex-end, stretch	How should the content be 
aligned along the secondary axis of our layout? (If the primary axis is row, then 
the secondary axis is column, and vice versa) Should content be aligned at the start,
 the center, the end, or stretched to fill?

*/

/*
export default function App() {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Toggle
        label={'Primary axis (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => {
          setFlexDirection(option)
        }}
      />
         <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <Toggle
        label={`${secondaryAxis} alignment (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => {
          setAlignItems(option)
        }}
      />
          <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
    </SafeAreaView>
  )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },
})
*/

//text
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})
  */

//image
/*
export default function App() {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'https://www.reactnative.express/static/logo.png' }}
    // source={require('./aitoolss.png')}
    //src='https://www.reactnative.express/static/logo.png'
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})
  */

//button

/*
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button

        title={'Press me!'}
        onPress={() => {
          setCount(count+ 1)
        }}
        touchSoundDisabled={false}
        accessibilityLabel='Press me'
      />
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
*/

/*
In React Native, most "buttons" are actually implemented using Touchable components.

Like Button, these components support an onPress prop. However, unlike Button, these 
components support custom styling - essentially a Touchable is a View that can be pressed.

Touchables have a variety of other props, like onPressIn and onPressOut, which give us 
more control over the behavior of the button. We can use these props to run custom 
animations. We'll cover custom animations later in the animation section.

Kinds of Touchable

Although we can run custom animations, most of the time, we use one of 2 built-in 
animations: a fade in opacity, or a change of color. There are preconfigured touchable 
components for each of these: TouchableOpacity and TouchableHighlight.

If we do want to write a custom animation, we'll typically use TouchableWithoutFeedback,
 since it doesn't have any built-in animation. If we want to support the native Android
  "ripple" effect, we'll use TouchableNativeFeedback.


*/

//Touchable Opacity
/*
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
*/

//Touchable Highlight
//underleycolor arka plan degistiriyor
/*
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#FAB"
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableHighlight>
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#F88',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
*/

//scrollview
//ScrollViews are used for scrollable content. They're well suited for scrolling 
// small quantities of content (less than a full screen). They can scroll 
// horizontally or vertically. For large quantities of items, consider using 
// a FlatList for better performance.

/*
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.large} />
      <ScrollView horizontal>
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
      <View style={styles.small} />
      <View style={styles.large} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})
  */

//flatlist
//FlatLists are used for large quantities of scrollable content. They expose 
// the underlying ScrollView, but add performance improvements: only rendering 
// the content on screen (clipping offscreen content), and only updating rows 
// that have changed. Like ScrollViews, they can scroll horizontally or vertically.
//Instead of rendering their children prop, FlatLists render each item in their
//  input data using the renderItem prop. The renderItem prop is a function which
//  takes an item from the data array and maps it to a React Element. Each item 
// in data should be an object with a unique id, so that React can determine when 
// items are rearranged. The unique id is looked up as item.key by default, but 
// you can specify another way to find/build the id by passing a keyExtractor function prop.

/*
const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
*/

//section list
//SectionLists are like FlatLists, but they can have section headers to separate groups of rows.
//SectionLists render each item in their input sections using the renderSectionHeader 
// and renderItem prop. Each item in sections should be an object with a unique id 
// (the key), and an array data of row data. Each item in data should also be an 
// object with a unique id. The renderSectionHeader prop is a function which takes
//  an item from the sections array and maps it to a React Element. The renderItem 
// prop, just like for FlatList, is a function which takes an item from the data array 
// (for a section) and returns a React Element.

/*
const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
  },
]
export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  }, header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})
*/

//Heterogenous row example
//A renderItem function may be specified as part of the sections data, one per section,
//  rather than as a prop of the SectionList. This lets us render each section differently.
//  Alternately, you could use the item data to determine how to render items differently.

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
    renderItem: ({ item }) => {
      return <Text style={styles.row}>{item.text}</Text>
    },
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
    renderItem: ({ item }) => <Text style={styles.rowDark}>{item.text}</Text>,
  },
]
export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderSectionHeader={({ section }) => {
        return <Text style={styles.header}>{section.title}</Text>
      }}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  }, header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
    fontWeight: 'bold',
  },
})