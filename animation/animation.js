/*
Animated - a built-in API for animating component styles
LayoutAnimation - a built-in API for animating between 2 component hierarchies 
(think "magic move"), although still considered experimental
react-native-reanimated - "worklets" that run in a second JS context on the UI thread

*/

/*
The Animated API lets us animate component styles.

There are 4 fundamental parts to this API:

Animated.Value - wrap a number value that we want to use in a style
Animated.View, Animated.Text, ... - use a component that supports animated styles
Animated.timing, Animated.spring, ... - choose an animation type
.start() - start the animation
*/

/*
1. Create an Animated.Value

To wrap a number value, call new Animated.Value(value).


import React, { useRef } from 'react'
import { Animated } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))
}
*/

/*
2. Choose an Animated component

Animated provides specially wrapped versions of the standard View, Text,
 and Image components. These wrapped components can have Animated.Values in 
 their style prop. To animate something other than one of these three, we can
 wrap any component, e.g. const AnimatedButton = Animated.createAnimatedComponent(Button).
Then, we can use the Animated.Value we created earlier in a style.
View/Text/Image için zaten hazır Animated.View gibi sürümler var.
Başka bir bileşeni animasyonlu yapmak istiyorsan createAnimatedComponent ile sarman gerekiyor.
Sonra Animated.Value ile istediğin stili kontrol edebilirsin.

import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button title="Animate" />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}
*/

import React, {useRef} from 'react'
import {Animated,SafeAreaView, Button} from 'react-native'

export default function MyComponent() {
    const value =useRef(new Animated.Value(0))

    return(
        <SafeAreaView>
            <Button
            title='Animate'
            onPress={()=> {
                const animation = Animated.timing(value.current, {
                    toValue: 1,
                    useNativeDriver: true,
                })

                animation.start()
            }}
            />

            <Animated.Text style={{opacity: value.current, fontSize: 42}}>
                HELLO!
            </Animated.Text>
        
        </SafeAreaView>

    )



}