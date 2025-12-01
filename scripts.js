const myLibrary = [];

function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
    const randomID = crypto.randomUUID();
    const newBook = new Book(title, author, pages, randomID);

    myLibrary.push(newBook);
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].pages}, ${myLibrary[i].id}`;
        document.body.appendChild(newDiv);
    }
}

addBookToLibrary("Warcross", "Marie Lu", 353);
displayBook();