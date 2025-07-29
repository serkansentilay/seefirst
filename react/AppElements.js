import React , {useEffect, useState, memo,useReducer, useRef} from 'react'
import { Button, View, SafeAreaView , Text, TextInput, Alert} from 'react-native'
/*
export default function MyComponent() {
  return (
    <SafeAreaView>
        <View>
            <Button title="Press me!" color="#1ACDA5" />
        </View>
    </SafeAreaView>
  )
}
*/

/*
function MyComponent({ title }) {
  return (
    <SafeAreaView>
    <View>
      <Button title={title} color="#1ACDA5" />
    </View>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <View>
      <MyComponent title="MyComponent 1" />
      <MyComponent title="MyComponent 2" />
    </View>
  )
}
  */

/*
export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCount((count) => count + 1), 1000)

    return () => clearInterval(id)
  }, [])

  return <Text style={{ fontSize: 120 }}>{count}</Text>
}
  */

/*

export default class MyComponent extends React.Component {
  render() {
    return (
            <SafeAreaView>

      <View>
        <Button title="Press me!" color="#1ACDA5" />
      </View>
          </SafeAreaView>

    )
  }
}
  */

/*
function CounterButton({ title, onIncrement }) {
  return <Button title={title} onPress={onIncrement} />
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
     <SafeAreaView>
    <CounterButton
      title={`Click HERE to increment: ${count}`}
      onIncrement={() => setCount(count + 1)}
    />
    </SafeAreaView>
  )
}

*/
/*

const Card = ({ title, showButton }) => (
  <View>
    <Text style={{ fontSize: 60 }}>{title}</Text>
    {showButton && <Button title="Press me!" />}
  </View>
)

export default function App() {
  return (
    <View>
      <Card title="Title" showButton={false} />
      <Card title="Title with button" showButton={true} />
    </View>
  )
}
  */

/*
 const Card = ({ title, buttonTitle }) => (
  <View>
    <Text style={{ fontSize: 60 }}>{title}</Text>
    {buttonTitle ? <Button title={buttonTitle} /> : null}
  </View>
)

export default function App() {
  return (
    <View>
      <Card title="Title" />
      <Card title="Title with button" buttonTitle="Press me!" />
    </View>
  )
}
  */


/*
const Card = ({ loading, error, title }) => {
  let content

  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  } else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
  } else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }

  return <View style={{ padding: 24 }}>{content}</View>
}

export default function App() {
  return (
    <View>
      <Card error={true} />
      <Card loading={true} />
      <Card loading={false} title="Title" />
    </View>
  )
}

*/

/*
export default function App() {
  const [text, setText] = useState('')

  return (
         <SafeAreaView>

    <View>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {'\n'}You entered: {text}
      </Text>
    </View>
    </SafeAreaView>
  )
}

*/



//const data = [
//  { id: 'a', name: 'Devin' },
//  { id: 'b', name: 'Gabe' },
//  { id: 'c', name: 'Kim' },  
//]

/*
export default function App() {
  return (
        <SafeAreaView>
            
    <View>
     {data.map((item) => (
        <Text>{item.name}</Text>
      ))}
    </View>
        </SafeAreaView>

  )
}
  */

/*
 export default function App() {
  return (
        <SafeAreaView>
            
    <View>
  {data.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</View>
        </SafeAreaView>

  )
}

*/

/*
 export default function App() {
  return (
        <SafeAreaView>
            
                <View>
            {data.map((item, index) => (
                <Text key={index.toString()}>{item.name}</Text>
            ))}
            </View>

        </SafeAreaView>

  )
}

*/

//memo
//Eğer props değişmemişse, bileşen render edilmez → performans kazanılır.
/*
function Label({ title }) {
  //console.log(`Rendered: ${title}`)
  Alert.alert(`Rendered: ${title}`)
  return <Text>{title}</Text>
}
Alert.alert('app 1 kez calisti')

const LabelMemo = memo(Label)

export default function App() {
  const [count, setCount] = useState(0)
Alert.alert('app her butonda calisti')
  return (
    <SafeAreaView>
      <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <LabelMemo title="Label with memo" />
      <Label title="Label" />
    </SafeAreaView>
  )
}
*/

//usestate
//The useState hook can store any type of value: a number, a string, 
// an array, an object, etc. We've previously used useState to increment 
// a number value and change a string.

/*
const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <SafeAreaView>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </SafeAreaView>
  )
}

*/


//usereducer

//Neden useReducer kullanılır?
//Eğer state'in sadece tek bir değeri varsa (örneğin bir sayı veya metin), useState yeterlidir.
//Ama state'in içinde birden fazla bağımsız parça (örneğin birden çok özellik içeren bir nesne) varsa,
//bu parçaları bağımsız ve düzenli şekilde güncellemek zorlaşabilir.
//useReducer Ne Yapar?
//useReducer, state’i güncellemek için bir fonksiyon (reducer) kullanır.
//Bu reducer, state’i ve yapılan işlemi (action) alır, yeni state’i döner.
//Böylece state güncellemeleri merkezi ve mantıklı bir şekilde yönetilir.

/*
function reducer(state, action) {
  switch (action.type) {
    case 'first':
      return { ...state, first: action.value }
    case 'last':
      return { ...state, last: action.value }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { first: '', last: '' })

  return (
    <SafeAreaView>
    <View>
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="First"
        value={state.first}
        onChangeText={(text) => {
          dispatch({ type: 'first', value: text })
        }}
      /> <TextInput
        style={{ fontSize: 32 }}
        placeholder="Last"
        value={state.last}
        onChangeText={(text) => {
          dispatch({ type: 'last', value: text })
        }}
      />
      <Text style={{ fontSize: 32 }}>
        Hello {state.first} {state.last}
      </Text>
    </View>
    </SafeAreaView>
  )
}
*/


//useeffect 
//useEffect hook'unu, React bileşenlerimiz içinde yan etkisi (side effect) 
// olan fonksiyonları çalıştırmak için kullanırız.
//Yan Etki (Side Effect) Nedir?
//Yan etki, bileşenin render edilmesi dışında gerçekleşen işlemlerdir.
//Örnekler:
//Veri çekmek (API çağrısı yapmak)
//DOM’a doğrudan müdahale etmek
//Zamanlayıcı (timer) kurmak
//Event listener eklemek veya kaldırmak
//Local storage ile çalışmak
//useEffect Ne İşe Yarar?
//Bileşen yüklendiğinde veya güncellendiğinde belli işlemleri yapmamızı sağlar.
//Bileşenin yaşam döngüsüne müdahale etmek gibi düşünülebilir.

//useEffect hook to call functions with side effects within our components.
/*
export default function App() {
  const [count, setCount] = useState(0)
  const countEvery3 = Math.floor(count / 3)

  useEffect(() => {
    //console.log(countEvery3)
    Alert.alert("useeffect countevery3 called")
  }, [countEvery3])


  return (
    <SafeAreaView>
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
    </SafeAreaView>
  )
}
*/
//useEffect, bağımlılık dizisinde verdiğin değer değiştiğinde tetiklenir. 
// Burada countEvery3'ün değeri sadece 3'er artışlarda değiştiği için efekt 
// sadece o zaman çalışıyor.

//undefined dependencies
//Eğer dependency array (bağımlılık dizisi) belirtilmemişse (yani
//  useEffect(() => { ... }) şeklindeyse),
//callback fonksiyonumuz bileşen fonksiyonu her çalıştığında, yani her renderda çalışır.
//Mesela bir butona tıklayıp useState ile state değiştirirsek, bileşen 
// yeniden render olur ve bu callback tekrar çalışır.

/*
export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    //console.log('Incremented!')
    Alert.alert("Incremented")

  })

  return (
    <SafeAreaView>
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
    </SafeAreaView>
  )
}
  */

//Empty dependencies
//Here the dependency array is empty, so our callback will only run once
//  (and therefore only log one time).

/*
export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    //console.log('Only once!')
    Alert.alert('Only once!')
  }, [])

  return (
    <SafeAreaView>
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
    </SafeAreaView>
  )
}
  */

//useref
//With useRef we can create and update a single mutable value that exists 
// for the lifetime of the component instance.
//After assigning the ref to a variable, we use .current to access the mutable value.
//useRef, render tetiklemeyen ama bileşen boyunca korunan değişkenler tutmak 
// için kullanılır. .current ile erişilir.
//useRef ile, bileşen çalıştığı sürece (yaşam döngüsü boyunca) var olan, 
// değiştirilebilir (mutable) bir değer oluşturabiliriz.
//Bu değere ulaşmak ve değiştirmek için, .current özelliğini kullanırız.

/*
 Ne zaman kullanılır?

DOM elemanına referans tutmak için (örneğin inputRef.current.focus())
Bir sayacı veya sayaç benzeri bir değeri tutmak ama render tetiklememek için
setTimeout, setInterval, WebSocket gibi şeylerde bir şeyleri "hatırlamak" için

Neye yarar?

useRef:

Bir değeri tutmak için kullanılır.
Bu değer değiştiğinde, component yeniden render olmaz.
Bileşen her render olduğunda useRef ile oluşturulan değer kaybolmaz, aynı kalır.
Yani: kalıcı ama render tetiklemeyen bir depolama alanı gibi düşünebilirsin.

*/
/*
export default function App() {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    )

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 120 }}>{count}</Text>
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current)
        }}
      />
    </View>
  )
}
*/
//useref,Bu, bir değişken gibi çalışır ama React sayfayı yeniden çizdiğinde 
// (render) bile değeri silinmez.
//Burada, setInterval’in ID’sini saklamak için kullanılıyor.
//Çünkü bu ID ile zamanı durdurabiliyoruz (clearInterval).

//useEffect içindeki kod, sadece ilk kez çalışır. (Çünkü sonundaki [] boş.)
//setInterval(...) → Her 1 saniyede bir çalışır. Sayacı 1 artırır.

//Bu kısım, bileşen kapatılırsa (unmount), zamanlayıcıyı durdurur.
//Önemlidir çünkü arkaplanda çalışmaya devam etmesin.

//const intervalRef = useRef()
//intervalRef, interval ID’sini (setInterval’in dönüş değerini) saklamak için kullanılıyor.
//Bu ID’yi daha sonra clearInterval ile durdurmak için gerekli.
//useRef() ile oluşturulan intervalRef değişkeni:
//Bileşen her render olduğunda aynı kalır (yani sıfırlanmaz).
//.current özelliği sayesinde değer tutulur.
//Render tetiklemez, sadece saklama işlevi görür.

//setCount(...) çağrıldığında React state değişti diye algılar.
//Ve bu yüzden bileşen (yani App fonksiyonu) yeniden çalıştırılır, yani render olur.
//useEffect içindeki bu setCount, her 1000ms'de bir çalıştığı için, component 
// da her saniyede bir yeniden render edilir.
//Ama useEffect kendisi tekrar çalışmaz
//Çünkü bağımlılık dizisi [] → sadece ilk renderdan sonra çalışır.



//custumhooks
//useState, useEffect, useRef gibi hook’ları kullanarak kendi 
// useInterval adlı hook’umuzu yazabiliriz.
//Ancak bu özel hook’un adının başına yine use yazmalıyız.
//Yani mesela useInterval, useAuth, useUser gibi.

/*
"useInterval örneği":

Burada, belli aralıklarla (örneğin her saniye) bir fonksiyonu çalıştırmak 
için useInterval adında özel bir hook yapıyoruz.
Ama dikkat: Böyle bir şey doğru çalışması için düşündüğünden daha karmaşık olabilir.
Çünkü:
Aralık süresi (delay) değişebilir.
Fonksiyon içeriği (callback) değişebilir.
Ve bunların her değişikliğe göre düzgün çalışması gerekir.

*/
/*

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
export default function App() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return <Text style={{ fontSize: 120 }}>{count}</Text>
}
*/
/*
 1. useRef() ile ne yapıyoruz?
callback fonksiyonunu bir kutuda (ref) saklıyoruz.
Neden? Çünkü React yeniden render edince, callback değişebilir.
Ama setInterval eskiyi tutuyor olur. O yüzden hep en güncel fonksiyonu kullanmak istiyoruz.

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
🟢 2. Bu useEffect ne yapıyor?
Eğer callback (yani setCount(count + 1)) değişirse, onu ref içine kaydediyoruz.
Böylece interval her zaman en güncel fonksiyonu çağırır.


 useEffect(() => {
    savedCallback.current = callback
  }, [callback])
🟢 2. Bu useEffect ne yapıyor?
Eğer callback (yani setCount(count + 1)) değişirse, onu ref içine kaydediyoruz.
Böylece interval her zaman en güncel fonksiyonu çağırır.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
🔵 3. Bu useEffect ne yapıyor?
delay (örneğin 1000 ms) varsa:
Yeni bir setInterval başlatılır.
savedCallback.current() her delay kadar zamanda çağrılır.
Ve cleanup kısmı var:
return () => clearInterval(id)
Bileşen kapanırsa veya delay değişirse → eski interval silinir.


 useInterval(() => {
    setCount(count + 1)
  }, 1000)
🔁 useInterval çağrıldı:
Her 1 saniyede bir setCount(count + 1) çağrılır.
Böylece sayaç her saniyede artar.


❗️ Ancak Dikkat: Bu kodda küçük bir hata var!

setCount(count + 1)
Bu, eski count değerini baz alır. Ama React’te state güncellenirken
 en doğru yöntem fonksiyonel güncelleme kullanmaktır:

✅ Doğru kullanım:
setCount(c => c + 1)
Çünkü count her zaman doğru değer olmayabilir (eskiyi tutuyor olabilir). 
Bu haliyle bazen sayacın artışı bozulabilir.
*/

