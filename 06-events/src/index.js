//1. Create a delete button element for each card
//2. Create a form that submits a new book
    //Render Header
    const renderHeader = () => document.querySelector('header h1').textContent = bookStore.name

    

    //Render BookList
    const renderBookList = (inventory) => {
        const bookList = document.querySelector('#book-list')
        inventory.forEach((book) => bookList.append(renderBook(book)))
    } 
    
    //render one book
    const renderBook = (book) => {
        const li = document.createElement('li')
        const h3Title = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const pInventory = document.createElement('p')
        const img = document.createElement('img')

        h3Title.textContent = book.title
        pAuthor.textContent = book.author 
        pPrice.textContent = `$${book.price}`
        pInventory.textContent = `Inventory: ${book.inventory}` 

        img.src = book.imageUrl
        li.className = 'list-li'
     
        li.append(h3Title, pAuthor, pPrice, pInventory, img)
        return li
    }

    //Renders Footer
    const renderFooter = () => {
        
        const footer = document.querySelector('footer')
        footer.innerHTML = `
        <p>${bookStore.name}</p>
        <p>${bookStore.address}</p>
        <p>${bookStore.hours}</p>
        <p> Easley's technical books .inc copyright 2022</p>
        `
    }
 
    


// function calls
renderHeader()
renderBookList(bookStore.inventory)
document.querySelector('#book-list li').remove()
renderFooter()
handleForm()
