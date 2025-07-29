//1. Create a navigator
//We first choose one of the available navigators, e.g. stack, which will act 
// as our root navigator. Navigators may be nested later.

//import { createStackNavigator } from '@react-navigation/stack'

//type RootParamList = {
//  Screen1: undefined
//  Screen2: { paramA: string }
//  Screen3: { paramB: string; paramC: number }
//}

//const Root = createStackNavigator<RootParamList>()


//2. Create screen components
//Next, we create a component for each screen.
//Screens are regular React components. They'll be passed navigation-specific 
// props when instantiated.

//import { StackScreenProps } from '@react-navigation/stack'

//type Screen1Props = StackScreenProps<RootParamList, 'Screen1'>

//const Screen1 = ({ navigation, route }: Screen1Props) => {
//  return <Text>Screen1</Text>
//}

//Navigation
//In this example, we navigate from Screen1 to Screen2 by pushing Screen2 onto
//  the stack when a button is pressed.

//const Screen1 = ({ navigation }: Screen1Props) => {
//  return (
//    <Button
//      onPress={() => {
//        navigation.push('Screen2', { paramA: 'Hello!' })
//      }}
//    />
//  )
//}

//Routes
//Within a screen, we have access to the current route and its parameters.
//const Screen2 = ({ route }: Screen2Props) => {
//  return <Text>{route.params.paramA}</Text>
//}

//Hooks
//For components which aren't screens (direct descendants of a navigator),
//  we can access the navigation and route objects using hooks.
//Some developers prefer using these hooks instead of props, even in screen components.

//import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
//import { StackNavigationProp } from '@react-navigation/stack'

//const Screen1 = () => {
//  const navigation = useNavigation<StackNavigationProp<RootParamList, 'Screen1'>>()
//  const route = useRoute<RouteProp<RootParamList, 'Screen1'>>()
//}