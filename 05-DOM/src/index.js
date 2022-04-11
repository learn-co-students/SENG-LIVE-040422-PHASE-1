//How does the DOM load our script file?
console.log(bookStore)

//Selecting Elements
    //Selecting and updating elements
    //Render Header
    const renderHeader = () => {
        const header = document.querySelector('header')
        const storeName = header.querySelector('h1')
        const h2Nodes = header.querySelectorAll('h2')
        storeName.textContent = bookStore.name
        h2Nodes[0].textContent = bookStore.address
        h2Nodes[1].textContent = bookStore.hours
    }

    //Creating and appending elements
    //Render BookList
    const renderBooks = (inventory) => {
        const bookList = document.querySelector('#book-list')
        inventory.forEach((book) => {
            const li = document.createElement('li')
            const h3Title = document.createElement('h3')
            const pAuthor = document.createElement('p')
    
            const pPrice = document.createElement('p')
            const img = document.createElement('img')
            h3Title.textContent = book.title
            pAuthor.textContent = book.author 
            pPrice.textContent = `$${book.price}`

            img.src = book.imageUrl
            li.className = 'list-li'

            li.append(h3Title, pAuthor, pPrice, img)
            bookList.append(li)
          
            
        })
        
    } 

    //Renders Footer
    const renderFooter = () => {
        const footer = document.querySelector('footer')
        footer.innerHTML = `
        <p> Easley's technical books .inc copyright 2022</p>
        `
    }
   


// function calls
renderHeader()
renderBooks(bookStore.inventory)
document.querySelector('#book-list li').remove()
renderFooter()
console.log(document.querySelector('#book-list li'))
