const myLibrary = [];
const preAdd = [];

function Book(title, author, pages, url, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.id = id;
}

function addBookToLibrary(title, author, pages, url) {
    const randomID = crypto.randomUUID();
    const newBook = new Book(title, author, pages, url, randomID);

    preAdd.push(newBook);
    myLibrary.push(newBook);
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement('div');
        const newCoverImgDiv = document.createElement('img');
        const newTitleDiv = document.createElement('div');
        const newAuthorDiv = document.createElement('div');
        const newPageDiv = document.createElement('div');

        const existingDiv = document.getElementById('library');

        newDiv.classList.add('book-square');

        newCoverImgDiv.setAttribute("src", `${preAdd[i].url}`);
        newCoverImgDiv.setAttribute("height", "150");
        newCoverImgDiv.setAttribute("width", "100");

        newTitleDiv.textContent = `${preAdd[i].title}`;
        newAuthorDiv.textContent = `${preAdd[i].author}`;
        newPageDiv.textContent = `${preAdd[i].pages}`;

        newDiv.appendChild(newCoverImgDiv);
        newDiv.appendChild(newTitleDiv);
        newDiv.appendChild(newAuthorDiv);
        newDiv.appendChild(newPageDiv);

        existingDiv.appendChild(newDiv);

        preAdd.pop();
    }
}

function getInputValue() {
    const titleInput = document.getElementById('title');
    const titleValue = titleInput.value;

    const authorInput = document.getElementById('author');
    const authorValue = authorInput.value;

    const pagesInput = document.getElementById('pages');
    const pagesValue = pagesInput.value;

    const urlInput = document.getElementById('url');
    const urlValue = urlInput.value;

    return { titleValue: titleValue, authorValue: authorValue, pagesValue: pagesValue, urlValue: urlValue };
}



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector("#submit")

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

submitButton.addEventListener("click", () => {
    event.preventDefault();
    const userData = getInputValue();
    addBookToLibrary(userData.titleValue, userData.authorValue, userData.pagesValue, userData.urlValue);
    displayBook();
})