# Functions
## SWBAT
- Understand the difference between declaring and invoking a function
- Implement Function Declarations, Function Expressions, and Arrow Functions
- Explain the difference between Function Declarations, Function Expressions, and Arrow Functions
- Explain the difference between Parameters and arguments
- Explain what First Class Function means
- Implement Higher Order Functions and Callback Functions

<p align="center">
    <img src="../assets/functions.jpeg" width="250" height="250">
</p>

## Deliverables 

The owner of a small bookstore has hired you to build them an app to help keep track of their book inventory. 

1. Store the bookstore name, books, and their prices into variables.

2. Write a function to open/close the store and greet customers.

3. Write a function that displays books and their current promos.

4. Write a function that buys a book, clears it from its variable, and returns a total. 

## Functions
Functions are like a small program. They consist of statements/tasks and return a value or undefined. 

```
// This is a function delcoration 
// This function is returning the string of 'hi'
function sayHi() {
    return 'hi'
}
//This is a function reference, but it doesn't actually run the function. 
sayHi

// To run or call or invoke (all the same thing). Write the functions name and add a pair of ()
sayHi()

// This functions console.logs the string of 'hello' but returns undefined because it does not have the return keyword.

function sayHello(){
    console.log('hello')
}

sayHello()

// logging and returning are not the same. A return value becomes the value of an invoked function, while a console.log only logs something to the console. 

```

Functions can take localized variables called parameters. When the function is invoked, it can be passed an argument. The argument becomes the value of the parameter.

```

function squareNumb(num){
    //num is the parameter, it is scoped to the inside of the function
    return num*num
}
// 2 is the argument. The value of num in the above function becomes 2.
squareNumb(2)


// functions can take multiple parameters.
function addTwo(num1, numb2){
    return num1 + num2
}
addTwo(5,10)

```

Arrow functions are another way to declare functions with some added benefits.

```
// An arrow function can avoid {} if it's return done on a single line or with () 
// An arrow function with a single paramater doesn't need the () around the paramater. 
const faveFood = food =>  `My fave food is ${food}`
const faveFood = food => (
     `My fave food is ${food}`
)
faveFood('cookies')

```

Arrow functions also have the added benefit of passing context, but we won't be covering that today. 

## Callbacks and HigherOrder Functions 

Functions in JavaScript are treated like any other variable. When functions are treated like this, we refer to them as First class. One of the most significant benefits of this is that functions in JavaScript can be passed as arguments to other functions.

```
// A function that returns a function is called a Higher-Order Function.

const outsideFunction = () => {
    return () => {
        //inside function
    }
}

//A function that is taken as an argument is a callback 

const opening => (openingVideo, credits){
    return openingVideo(credits)
}

const taskingHistory(){
    //... video functionality here
}

const crashCourse(){
    //... video functionality here
}

opening(crashCourse, 'Hank Green')

```