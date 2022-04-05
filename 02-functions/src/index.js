// 'Easley\'s Technical Books'
const bookstore = 'Easley\'s Technical Books';

let open = false;
let book1 = "You don\'t know js, yet:Get Started by Kyle Simpson";
let b1Price = 10;

let book2 = "Eloquent JavaScript, 3rd Edition by Marijn Haverbeke";
let b2Price = 15;

let book3 = "Javascript: The Definitive Guide by David Flanagan";
let b3Price = 40;

let book4 = "Cracking the Coding Interview by Gayle Laakmann McDowell";
let b4Price = 45;

let total = 0;


function toggleStoreOpen(){
    open = !open
    // open === true 
    if(open){
        console.log(`Welcome to ${bookstore}, we are open!`)
    } else {
        
        console.log('Sorry we are not open')
    };
};


// toggleStoreOpen()
// toggleStoreOpen()
//Book is a Parameter

function printBook(book){
    console.log(book)
}
//book1 is an argument
//printBook(book1)
// printBook(book2)

// () => 
// function(){}
const printPromo = (someBook, promo) => `${someBook} is ${promo} off!`
// /console.log(printPromo(book2, '%50'))
// total = total + bookPrice
// const addToTotal = bookPrice => {
//    return total+= bookPrice
// }
const addToTotal = bookPrice => {
    return total+= bookPrice
}
const halfOff = (bookPrice) => {
    debugger
    bookPrice = Math.floor(bookPrice/2)
    return total += bookPrice
}

// console.log(addToTotal(b1Price))
// console.log(addToTotal(b2Price))

const buyBook = (cb, bookPrice) => {
    cb(bookPrice)
    return total
}

// console.log(buyBook(addToTotal, b1Price))
// console.log(buyBook(halfOff, b2Price))

const intro = (cb) => {
    return cb()
}

const greeting1 = () => 'hey how are you?'
const greeting2 = () => 'Yo!'
const greeting3 = () => 'hi hi hi'

console.log(intro(greeting1))
console.log(intro(greeting2))




