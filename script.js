const submitNewBook = document.querySelector('#submitNewBook');
const displayLibrary = document.querySelector('.display-library');
const navNewBtn = document.querySelector('#navNewBtn');
let bookArr = []

submitNewBook.addEventListener('click', handleSubmitNewBook);
navNewBtn.addEventListener('click', handleNavNewBtn);

function handleDelete(e) {
    let id = e.target.getAttribute('data')
    let deleteCard;
    document.querySelectorAll('.card').forEach(card => {
        if (card.getAttribute('data') === id) {
            deleteCard = card
        }
    });
    displayLibrary.removeChild(deleteCard)
    newBookArr = bookArr.filter(book => book.id !== parseInt(id))
    bookArr = newBookArr;
}

function handleNavNewBtn() {
    document.querySelector('.pop-up').classList.remove('not-display')
}

function handleSubmitNewBook(e) {
    //Prevent defaule
    e.preventDefault();
    //Get submit value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    const id = Date.now();
    //Add the new book to array
    let newBook = new Book(author, title, pages, isRead, id)
    bookArr = [...bookArr, newBook]
    //Display the book on card
    let card = createNewCard(newBook.title, newBook.author, newBook.pages, newBook.isRead, newBook.id)
    displayLibrary.appendChild(card)
    //Close pop-up
    document.querySelector('.pop-up').classList.add('not-display')
}

function createNewCard(title, author, pages, isRead, id) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data', id)

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
    readingMessageText.innerText = isRead ? 'Read' : 'Not Read'
    readingMessageText.classList.add('reading-message-text')
    readingMsgDisplay.appendChild(checkbox)
    readingMsgDisplay.appendChild(readingMessageText)

    let button = document.createElement('button')
    button.classList.add('delete-btn')
    button.innerText = 'Delete'
    button.setAttribute('data', id)
    button.addEventListener('click', e => handleDelete(e))

    card.appendChild(bookInformation);
    card.appendChild(readingMsgDisplay);
    card.appendChild(button);

    return card
}

function Book(author, title, pages, isRead, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
    this.info = () => {
        return (`${title} by ${author}, ${pages} pages, ${isRead}`)
    }
}
