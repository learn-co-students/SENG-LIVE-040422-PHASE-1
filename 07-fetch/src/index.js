//1. Move function calls to DOMContentLoaded loaded event.
//2. Add fetch calls for data now handled by our JSON server.
// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json())
// .then((data) => {
//     console.log(data)
// })

// fetch('http://localhost:3000/store_info/1')
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
//     renderHeader(data)
//     renderFooter(data)
// })

// fetch('http://localhost:3000/inventory')
// .then(res => res.json())
// .then(books => renderBookList(books))

const getData = (url) => {
    return fetch(url)
    .then(res => res.json())
}

getData('http://localhost:3000/store_info/1')
.then((data) => {
    console.log(data)
    renderHeader(data)
    renderFooter(data)
})

getData('http://localhost:3000/inventory')
.then(books => renderBookList(books))


    //Render Header
    const renderHeader = (bookStore) => document.querySelector('header h1').textContent = bookStore.name


    //Render BookList
    const renderBookList = (inventory) => {
        const bookList = document.querySelector('#book-list')
        inventory.forEach((book) =>{
            const li = renderBook(book)
            bookList.append(li)
        })
    } 
    
    //Render one book
    const renderBook = (book) => {
        const li = document.createElement('li')
        const h3Title = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const pInventory = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')
       
        h3Title.textContent = book.title
        pAuthor.textContent = book.author 
        pPrice.textContent = `$${book.price}`
        pInventory.textContent = `Inventory: ${book.inventory}` 
        btn.textContent = 'DELETE'
       
        img.src = book.imageUrl
        li.className = 'list-li'

        //adding events
        btn.addEventListener('click',(e) => {
            console.log(e)
            li.remove()
        })
     
        li.append(h3Title, pAuthor, pPrice, pInventory, img, btn)
        return li
    }

    //Renders Footer
    const renderFooter = (bookStore) => {
        
        const footer = document.querySelector('footer')
        footer.innerHTML = `
        <p>${bookStore.name}</p>
        <p>${bookStore.address}</p>
        <p>${bookStore.hours}</p>
        <p> Easley's technical books .inc copyright 2022</p>
        `
    }

    const handleForm = () => {
        const form = document.querySelector('form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e.target['form-title'].value)
            const book ={
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory: e.target.inventory.value,
            reviews:[]
            }
            document.querySelector('#book-list').append(renderBook(book))
           
        })


    }
 
    


// function calls
    renderHeader()
    renderBookList(bookStore.inventory)
    document.querySelector('#book-list li').remove()
    renderFooter()
    handleForm()


    
