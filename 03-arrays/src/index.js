// 1. Store the books and customer names in arrays. 
    // Creating arrays
    const books = [
        'JavaScript: The Definitive Guide by David Flanagan', 
        'JavaScript: The Good Parts by Douglas Crockford',  
        'JavaScript & JQuery: Interactive Front-End Web Development by Jon Duckett', 
        'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke', 
        'Learn Enough JavaScript to Be Dangerous by Michael Hartl',
        'Cracking the Coding Interview by Gayle Laakmann McDowell' 
    ];

    const customers = ['Ceredic Boulderhill', 'Wandrille Farfoot', 'Godobald Goodwort', 'Wibert Bunce', 'Burchard Riverhopper', 'Thietmar Goodwort', 'Adalbert Sandyman','Thierry Oakbottom'];

  

    // Accessing elements
    //console.log(books[0]);

    // Adding elements
    books.push('JavaScript Cookbook by Shelly Powers')
    books.unshift('You Don\'t Know JS by Kyle Simpson')
  

    // Removing elements
    books.pop()
    books.shift()
    books.splice(2,2)


    b2 = books.slice(2)

    // console.log(books)
    // console.log(b2)

    b3 = [...books,'You Don’t Know JS by Kyle Simpson']
    //console.log(b3)


    // Loop Through elements
   
    // for..of
    const looping = (arr) => {
        for(element of arr){
            console.log(element);
        }
    };
    //looping(books);
    // for...in
    // forEach
    // for each element in this array I am calling this callback
    // forEach return undefined
    // books.forEach(
    //     (book) => {
    //         console.log(`forEach: ${book}`)
    //     }
    // )


// 2. Write a functions that can transform book elements. 
//     - Change books to uppercase 
//     - Remove the author 
//     - remove the title.
    //Map
    const transformBook = (handler) => {
        return books.map(handler)
    }

    const bookToUpperCase = (book) => {
        return book.toUpperCase();
    }
    const removeAuthor = (book) => {
        const temp = book.split(' by ')
        console.log(temp)
        return temp[0]
    }
    // console.log(transformBook(bookToUpperCase))
    // console.log(transformBook(removeAuthor))

    // const customerToUpperCase = () =>  customers.map(customer => customer.toUpperCase())

    // console.log(customerToUpperCase())


// 3. Write a function that will filter books out by a search term.
    //Filter

// 4. Write a function that returns a specific book by search term. 
    //Find
    const findBook = (search) => {
       return books.filter(
            (book) => {
                return book.includes(search)
            }
        ).map(removeAuthor)
    }
console.log(findBook('J'))
  
   