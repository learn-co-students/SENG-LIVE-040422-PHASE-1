//1. Review post
//2. Update a book using PATCH.
// - Add a sell button to a book. On button click the inventory number decreases both on the client and the server. If inventory is 0 remove the buy button.
//3. Delete a book using DELETE
// On click of the delete button the book should be removed from the client and server.
    const getData = (url) => {
        return fetch(url)
        .then(res => res.json())
    }

    const postData = (bookData) => {
    
  //Review POST
        fetch('http://localhost:3000/inventory',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(bookData =>{
            document.querySelector('#book-list').append(renderBook(bookData))
        })
    }

    const patchData = (book, bodyData) => {
        return fetch(`http://localhost:3000/inventory/${book.id}`,{
                method: 'PATCH',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(bodyData)
            })
            .then(res => res.json())
    }

    const deleteData = (book) => {
        return fetch(`http://localhost:3000/inventory/${book.id}`,{
            method:'DELETE'
        })
    }



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
        const btnDelete = document.createElement('button')
        const btnBuy = document.createElement('button')
       
        h3Title.textContent = book.title
        pAuthor.textContent = book.author 
        pPrice.textContent = `$${book.price}`
        pInventory.textContent = `Inventory: ${book.inventory}` 
        btnDelete.textContent = 'DELETE'
        btnBuy.textContent = 'BUY BOOK'
       
        img.src = book.imageUrl
        li.className = 'list-li'

        //adding events
        btnBuy.addEventListener('click', () => {
            console.log(book)
            //pInventory.textContent =  `Inventory: ${book.inventory+=1}` 
            // fetch(`http://localhost:3000/inventory/${book.id}`,{
            //     method: 'PATCH',
            //     headers:{
            //         'Content-type':'application/json'
            //     },
            //     body: JSON.stringify({inventory:book.inventory+=1})
            // })
            // .then(res => res.json())
            // .then(bookData => {
            //     pInventory.textContent =  `Inventory: ${bookData.inventory}`
            // })
            patchData(book, {inventory:book.inventory+=1})
            .then(bookData => {
                pInventory.textContent =  `Inventory: ${bookData.inventory}`
            }) 
        })

        btnDelete.addEventListener('click',() => {
            deleteData(book)
            .then(() => li.remove())
        })

        li.append(h3Title, pAuthor, pPrice, pInventory, img, btnBuy,btnDelete)
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
        form.addEventListener('submit',(e) => {
            e.preventDefault()
            const bookData = {
                title:e.target.title.value,
                author:e.target.author.value,
                price:e.target.price.value,
                imageUrl:e.target.imageUrl.value,
                inventory:e.target.inventory.value,
                reviews:[]
            }
       
            postData(bookData)
        })
    }
 
    


// function calls
    document.querySelector('#book-list li').remove()
    handleForm()
    getData('http://localhost:3000/store_info/1')
        .then((data) => {
        console.log(data)
        renderHeader(data)
        renderFooter(data)
    })

    getData('http://localhost:3000/inventory')
        .then(books => renderBookList(books))



