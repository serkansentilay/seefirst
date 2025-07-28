//import myNumber from "./myNumber.js";
import { myNumber, myString } from "./myNumber.js";
console.log("myNumber:", myNumber , "MYSTRING:", myString);


//arrow funct
const add5 = (myNumbers) => {
  return myNumbers + 5
}

console.log(add5(2))

console.log([0, 42, 100].map(add5))


console.log([0, 42, 100].map((myNumbers) => myNumbers + 5))

//classes
class Cat {
  constructor(name) {
    this.name = name
  }
}

const myCat = new Cat('nyan')

console.log(myCat)

console.log(`My name is ${myCat.name}`)

console.log(myCat instanceof Cat)

//destruction
const myObject = {
  name: 'Devin',
  age: 29,
}

const { name, age } = myObject

console.log(name, age)

const myArray = [1, 2, 3]

const [a, b, c] = myArray

console.log(a, b, c)

const myObjects = {
  name: 'Devin',
  age: 29,
}

function myFunction({ name, age }) {
  return `${name}: ${age}`
}

console.log(myFunction(myObjects))

const people = {
  name: 'Devin',
  age: 29,
  hairColor: undefined,
  eyeColor: 'blue',
  location: {
    city: 'San Francisco',
  },
}

const {
  name: myName,
  hairColor = 'brown',
  location: { city },
  ...otherProperties
} = people

console.log(myName, hairColor, city, otherProperties)


const myObject1 = { name: 'Devin', hairColor: 'brown' }

const myObject2 = { ...myObject1, age: 29 }

console.log(myObject2)


const fetchData = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  return data
}

const printData = async () => {
  try {
    const data = await fetchData()
    console.log('Data', data)
  } catch (error) {
    console.error('Problem', error)
  }
}

printData()