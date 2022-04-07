//Data being loaded before index.js
//console.log(bookStore)
// Creating objects
const customer = {
    username: 'rose',
    userID: 1,
    greetCustomer: () => console.log('hi')
}

// Accessing Object Properties
customer.address = '999 9th Seattle wa 99999'
customer['phone'] = 9998675309
let prop = 'points'
customer[prop] = 0

customer.address
let loginPop = 'userID'
customer[loginPop]

// Accessing Nested Object Properties
bookStore.inventory[2].reviews[0].content = 'This is the best book of all time!'

// Modifying Object Properties 

bookStore.location = 'New York'
bookStore['hours'] = 'Monday - Saturday 9am - 6pm'

//Deleting properties 
delete bookStore.name

//console.log(bookStore)
// Iterating through objects
// for...in loops
const loopThroughObjects = (obj) => {
    for(key in obj){
        console.log('key', key)
        console.log('value', obj[key])
    }
}
//loopThroughObjects(bookStore.inventory[0])


//Object.keys, values and entries
console.log(Object.keys(bookStore.inventory))
console.log(Object.values(bookStore.inventory))
console.log(Object.entries(bookStore.inventory))

//Making a shallow copy and Pass by reference
// const bookCopy = {...bookStore, name:'Cute Books', location:'Tacoma' }
const bookCopy = {...bookStore, inventory:{...bookStore.inventory, reviews:{...bookStore.inventory.reviews}} }

bookCopy.inventory[0] = false

console.log(bookCopy)
console.log(bookStore)

const customerCopy = Object.assign({}, customer)
// console.log(customerCopy)

//Review 
//Return an array of just book titles from bookStore using map
// bookStore.inventory.map((book) => book.title)
//console.log(bookStore.inventory.map(
//     (book) => {
//         return book.title
//     }
// ))
//console.log(bookStore)

//Find every book that's with a price under 30

