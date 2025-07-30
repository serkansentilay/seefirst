/*
Pan Responder
Most React Native components, like View, can handle touch/click events. However, 
the APIs for doing this are fairly low level, so we rarely use them directly. 
Instead, we use the PanResponder API, which is a higher level abstraction for 
handling touch/click events.


Çoğu React Native bileşeni (örneğin View), dokunma veya tıklama (touch/click)
 olaylarını işleyebilir.
Ancak bu olayları işlemek için sunulan API’ler oldukça düşük seviyelidir (low level),
 bu yüzden genellikle doğrudan kullanılmazlar.
Bunun yerine, touch/click olaylarını yönetmek için daha üst düzey (high-level) bir 
soyutlama olan PanResponder API kullanılır.


*/

/*
API

Only a single component can respond to touch events at one time - the component 
responding to events owns a global "interaction lock". The PanResponder API helps 
us manage what component owns this lock through a set of callbacks. Each of these 
callbacks is also passed an event and gestureState object containing info about the
 touch events (e.g. position and velocity).

To create a PanResponder, we call PanResponder.create(callbacksObject). The result 
is a set of props that can be passed to View as props (these are the lower-level 
touch event handling props). We'll typically wrap the result with useRef, since we
 only want to create a single PanResponder for the lifecycle of the component.

The full set of callbacks we can pass is:

onStartShouldSetPanResponder: (event, gestureState) => {}
onStartShouldSetPanResponderCapture: (event, gestureState) => {}
onMoveShouldSetPanResponder: (event, gestureState) => {}
onMoveShouldSetPanResponderCapture: (event, gestureState) => {}
onPanResponderReject: (event, gestureState) => {}
onPanResponderGrant: (event, gestureState) => {}
onPanResponderStart: (event, gestureState) => {}
onPanResponderEnd: (event, gestureState) => {}
onPanResponderRelease: (event, gestureState) => {}
onPanResponderMove: (event, gestureState) => {}
onPanResponderTerminate: (event, gestureState) => {}
onPanResponderTerminationRequest: (event, gestureState) => {}
onShouldBlockNativeResponder: (event, gestureState) => {}


 Aynı anda yalnızca bir bileşen dokunma (touch) olaylarına yanıt verebilir — olaylara
  yanıt veren bileşen, küresel (global) bir "etkileşim kilidine" (interaction lock) sahip olur.
PanResponder API, bu kilide hangi bileşenin sahip olacağını yönetmemize yardımcı olan 
bir dizi geri çağırma (callback) fonksiyonu sunar.

Bu callback fonksiyonlarının her birine, dokunma olayları hakkında bilgi içeren iki 
parametre aktarılır:

event → Olay hakkında bilgi
gestureState → Dokunma hareketiyle ilgili bilgiler (örneğin: pozisyon, hız vb.)

PanResponder nasıl oluşturulur?
Bir PanResponder oluşturmak için şu şekilde çağrı yapılır:

PanResponder.create(callbacksObject)
Bu çağrı, View bileşenine props olarak aktarılabilen bir prop seti döner. (Bunlar, 
daha düşük seviyeli dokunma olaylarını işleyen props’lardır.)

Genellikle bu sonucu useRef ile sarmalarız. Çünkü bileşen yaşam döngüsü boyunca 
yalnızca bir adet PanResponder oluşturmak isteriz.

*/

/*
In this example, we'll use PanResponder to create a drag interaction. There are 3 parts:

pan.js - This contains a reducer function for managing the state of the drag (we use 
the conventions from the managing data with useReducer section)
usePanResponder.js - A custom hook that creates a PanResponder with a set of callbacks 
for managing the gesture and updating the state of the drag via useReducer.
App.js - We call our custom usePanResponder hook, passing the created panHandlers into
 a View, and using the drag state to update the style.
In a real app, we should generally use Animated.Values in our style for better performance. 
E.g. create a positionY animated value from initialY and offsetY, and start a .timing 
animation with a very short duration whenever the state of the drag changes.


 Bu örnekte, PanResponder kullanarak bir sürükleme (drag) etkileşimi oluşturacağız. 
 Bu işlem 3 bölümden oluşur:
pan.js –
Bu dosya, sürükleme durumunu yönetmek için bir reducer fonksiyonu içerir.
(useReducer ile veri yönetimi bölümünde belirtilen kuralları kullanıyoruz.)
usePanResponder.js –
Bu özel hook, sürükleme hareketini (gesture) yönetmek ve useReducer aracılığıyla durumu 
güncellemek için bir dizi callback fonksiyonuyla PanResponder oluşturan bir custom hook’tur.
App.js –
Bu dosyada, oluşturduğumuz usePanResponder hook’unu çağırıyoruz.
Oluşan panHandlers'ı bir View bileşenine geçiriyoruz ve sürükleme durumunu style üzerinde 
kullanarak güncellemeler yapıyoruz.
Gerçek bir uygulamada dikkat edilmesi gerekenler:
Performansı artırmak için genellikle Animated.Value kullanmalıyız.
Örneğin:

initialY ve offsetY değerlerinden bir positionY adlı Animated.Value oluşturmak,
Ve sürükleme durumu her değiştiğinde, çok kısa süreli .timing animasyonları başlatmak 
daha iyi sonuç verir.

*/


import { useReducer, useRef } from 'react'
import { PanResponder } from 'react-native'

import { actionCreators, initialState, reducer } from './pan'

export default function usePanResponder() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Should we claim the interaction lock when the user presses down on the square?
  const handleStartShouldSetPanResponder = (e, gestureState) => true
  //true dönersek: Bu bileşen dokunma olayını sahiplenir (interaction lock alır).
  //Her zaman true diyerek sürükleme olayını her dokunuşta başlatıyoruz.


  // We were granted the interaction lock, so start the drag!
  const handlePanResponderGrant = (e, gestureState) => {
    dispatch(actionCreators.start())
  }
  //Kullanıcı parmağını bastığında çalışır.
  //start() aksiyonu ile reducer'a "drag başlasın" diyoruz.


  // Every time the touch/mouse moves, update the drag.
  const handlePanResponderMove = (e, gestureState) => {
    dispatch(actionCreators.move({ x: gestureState.dx, y: gestureState.dy }))
  }
  //gestureState.dx: X ekseninde ne kadar sürüklendi.
  //gestureState.dy: Y ekseninde ne kadar sürüklendi.
  //Bunları move() aksiyonu ile reducer’a gönderiyoruz.


  // When the touch/mouse is lifted, end the drag.
  const handlePanResponderEnd = (e, gestureState) => {
    dispatch(actionCreators.end({ x: gestureState.dx, y: gestureState.dy }))
  }
  //Parmağın bırakıldığı an bu fonksiyon çağrılır.
  //Hareketin ne kadar sürdüğünü end() aksiyonu ile reducer’a bildiriyoruz.


   const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  )
  //useRef: Bu PanResponder objesini bir kere oluşturmak için kullanılıyor.
  //PanResponder.create(...): PanResponder davranışlarını tanımlıyor.
  //onPanResponderRelease → kullanıcı parmağını kaldırırsa
  //onPanResponderTerminate → sistem müdahale ederse (örneğin başka bileşen 
  // araya girerse) yine aynı işlemi yapıyoruz.

  return [state, panResponder.current.panHandlers]

  //state: Drag durumu (bileşen pozisyonu vb.).
  //panHandlers: View gibi bileşenlere doğrudan ...panHandlers şeklinde props 
  // olarak verilecek olay dinleyicileri.

}
