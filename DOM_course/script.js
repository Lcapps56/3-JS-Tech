document.addEventListener('DOMContentLoaded', () => {




const list = document.querySelector('#book-list ul')
const addForm = document.querySelector('#add-book')
const hideBox = document.querySelector("#hide")
const searchBar = document.forms["search-books"].querySelector('input')
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')



// delete books
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete'){
        const li = e.target.parentElement
        list.removeChild(li)
    }
})

// add books
addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newBook = addForm.querySelector("input[type='text'").value

    //  create elements
    const newLi = document.createElement('li')
    const newBookName = document.createElement('span')
    const newDelBtn = document.createElement('span')

    // add content to element
    newDelBtn.textContent = 'delete'
    newBookName.textContent = newBook

    // add any needed classes
    newDelBtn.classList.add('delete')
    newBookName.classList.add('name')

    // Create structure
    newLi.appendChild(newBookName)
    newLi.appendChild(newDelBtn)

    // append to DOM
    list.appendChild(newLi)

    addForm.querySelector("input[type='text'").value = ''
    
})

// hide all books

hideBox.addEventListener('change', () => {
    if(hideBox.checked){
        list.style.display = 'none'
    } else{
        list.style.display = 'initial'
    }
})

// filter books
searchBar.addEventListener('keyup', (e) => {
    e.preventDefault

    const term = e.target.value.toLowerCase()
    const books = Array.from(list.getElementsByTagName('li'))

    books.forEach((book) => {
        const title = book.firstElementChild.textContent
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'
        } else{
            book.style.display = 'none'
        }
    })
})

// tabbed content
tabs.addEventListener('click', (e)=>{
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach((panel) => {
            if (panel == targetPanel){
                panel.classList.add('active')
            }else{
                panel.classList.remove('active')
            }
        })
    }
})




})