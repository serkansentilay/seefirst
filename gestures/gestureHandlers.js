/*
Gesture Handlers
With the library react-native-gesture-hander, we can use the native
 gesture recognition APIs.

We can use these React components to detect gestures:

PanGestureHandler – Sürükleme hareketleri için
TapGestureHandler – Dokunma (tıklama) hareketleri için
LongPressGestureHandler – Uzun basma hareketi için
RotationGestureHandler – Döndürme hareketleri için
FlingGestureHandler – Hızlı kaydırma (fırlatma) hareketleri için
PinchGestureHandler – Yakınlaştırma/uzaklaştırma (iki parmakla sıkıştırma) hareketi için
ForceTouchGestureHandler – Basınç algılayan (3D Touch gibi) hareketler için


States

A gesture is always in one of the following states:

UNDETERMINED – Belirsiz/başlamamış
BEGAN – Hareket başladı
ACTIVE – Hareket devam ediyor
END – Hareket sona erdi
CANCELLED – Hareket iptal edildi
FAILED – Hareket başarısız oldu

onHandlerStateChange prop’u, bu durumlar değiştiğinde tetiklenir.
The onHandlerStateChange prop is called when the state changes.

Events

Any change in the gesture (e.g. the user moving their finger) will 
trigger an event - we can listen for events with the onGestureEvent prop.
Kullanıcı parmağını hareket ettirdiğinde gibi herhangi bir değişiklik 
bir olay (event) tetikler.
Bu olayları onGestureEvent prop’u ile dinleyebiliriz.



PanGestureHandler event metadata includes:

x, y – Kullanıcının parmağının mevcut konumu
translationX, translationY – Parmağın ilk noktaya göre yaptığı hareket (ne kadar kaydırıldı)
velocityX, velocityY – Parmağın hareket hızı
Bu değerler, Animated.Value nesnelerine dönüştürülerek animasyonlarda kullanılabilir.

These can become Animated.Values.
*/


import React, { useRef } from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

export default function MyComponent() {
  const translationY = useRef(new Animated.Value(0))

  const event = useRef(
    Animated.event([{ nativeEvent: { translationY: translationY.current } }], {
      useNativeDriver: true,
    })
  )

  return (
    <PanGestureHandler
      onGestureEvent={event.current}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
          // Do something
        }
      }}
    >
      <Animated.View
        style={{ transform: [{ translateY: translationY.current }] }}
      />
    </PanGestureHandler>
  )
}