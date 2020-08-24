






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