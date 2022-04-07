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


