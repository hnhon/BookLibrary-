const submitNewBook = document.querySelector('#submitNewBook');
const displayLibrary = document.querySelector('.display-library');
const navNewBtn = document.querySelector('#navNewBtn');
let bookArr = []

submitNewBook.addEventListener('click', handleSubmitNewBook);
navNewBtn.addEventListener('click', handleNavNewBtn);

function handleNavNewBtn () {
    document.querySelector('.pop-up').classList.remove('not-display')
}

function handleSubmitNewBook (e) {
    //Prevent defaule
    e.preventDefault();
    //Get submit value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    //Add the new book to array
    let newBook = new Book(author, title, pages, isRead)
    bookArr = [...bookArr, newBook]
    //Display the book on card
    let card = createNewCard(newBook.title, newBook.author, newBook.pages, newBook.isRead)
    displayLibrary.appendChild(card)
    //Close pop-up
    document.querySelector('.pop-up').classList.add('not-display')
}

function createNewCard (title, author, pages, isRead) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-title', title)
    
    let bookInformation = document.createElement('div')
    bookInformation.classList.add('book-information')
    let h3Title = document.createElement('h3')
    let divAuthor = document.createElement('div')
    let divPage = document.createElement('div')
    h3Title.classList.add('title')
    divAuthor.classList.add('author')
    divPage.classList.add('page')
    h3Title.textContent = title;
    divAuthor.textContent = author;
    divPage.textContent = `${pages} pages`;
    bookInformation.appendChild(h3Title)
    bookInformation.appendChild(divAuthor)
    bookInformation.appendChild(divPage)

    let readingMsgDisplay = document.createElement('div')
    readingMsgDisplay.classList.add('reading-message-display')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    let readingMessageText = document.createElement('span')
    readingMessageText.innerText = isRead? 'Read' : 'Not Read'
    readingMessageText.classList.add('reading-message-text')
    readingMsgDisplay.appendChild(checkbox)
    readingMsgDisplay.appendChild(readingMessageText)

    let button = document.createElement('button')
    button.classList.add('delete-btn')
    button.innerText = 'Delete'

    card.appendChild(bookInformation);
    card.appendChild(readingMsgDisplay);
    card.appendChild(button);

    return card
}

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        return (`${title} by ${author}, ${pages} pages, ${isRead}`)
    }
}

const book1 = new Book('J.K Rowling', 'Harry Potter', 144, 'not read yet')
console.log(book1.info())