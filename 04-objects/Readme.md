# Objects
## SWBAT
- Implement objects 
- Access object properties and nested properties  
- Modify object Properties 
- Iterate through objects using for...in
- Implement Object.keys, Object.values and Object.entries 
- Use the spread operator to make a shallow copy of an object

## Object
Object is a data type that's used to store other data. Arrays are a type of object. A typical Object has key-value pairs. Much like an Array has indexes that contain values, Objects have keys (also known as properties) that hold value. 

```
//Creating objects
//Objects can start as an empty pair of {} or with default data
const obj = {username: 'rose', faveFood:{food:'nulo', serving: 1}}

//New properties can be added using dot notation or bracket notation 
obj.favToys = ['banana-plush', 'feather stick']
obj['age'] = 10

//Bracket notation allows variables to be passed in for keys
let owner = 'ix'
obj[owner]

// {username: 'rose', faveToys:['banana-plush', 'feather stick'], age:10, owner:'ix'}

//Accessing properties 
//Properties can be access through dot or bracket notation
obj.username //rose
obj['owner'] // ix

//Accessing nested properties
obj.favToys[1] // 'feather stick'
obj.favFood.food // 'nulo'

//Updating properties 
obj.age = 11

//Delete object property  
delete obj.age 

```

## Copying objects
Objects and Arrays are pass by reference. 
```
//The following does not make a copy of obj1 but refers to it.
const obj1 = {username:rose}
const obj2 = obj1

//If you make a change to obj2 it will have an effect on obj1
obj2.username = 'tom'
obj1.username // 'tom'


//Object.assign, and the spread operator can be used to make shallow copies of objects. 

const obj3 = {...obj1}
obj3.username = 'bubbles'
obj1.username // rose


const obj4 = Object.assign({}, obj)
obj4.username = 'bubbles'
obj1.username // rose

//However, if the Object has deeply nested data, the data will not be copied and will remain a reference.

const obj1 = {arr:[1,2,3]}
const obj5 = {...obj1}
obj5.arr[0] = false
obj1.arr // [false, 2, 3]

//You can fix this with nesting the spread operator 
const obj6 = {...ob1, arr:...obj1.arr}


```