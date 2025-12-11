const myLibrary = [];

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

    myLibrary.push(newBook);
}

function displayBook() {
    const dupes = document.getElementById('library');
    dupes.innerHTML = ''; // <--- clear before re-rendering

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary);
    
        const newDiv = document.createElement('div');
        const newCoverImgDiv = document.createElement('img');
        const newTitleDiv = document.createElement('div');
        const newAuthorDiv = document.createElement('div');
        const newPageDiv = document.createElement('div');
        const deleteButton = document.createElement('button');
        const readButton = document.createElement('button');

        deleteButton.textContent = "Delete Book";
        readButton.textContent = "Read";

        deleteButton.classList.add("deleteButton");
        readButton.classList.add("haveNotRead");

        const existingDiv = document.getElementById('library');

        newDiv.classList.add('book-square');
        newTitleDiv.classList.add('book-title');
        newPageDiv.classList.add('page-count');

        newTitleDiv.textContent = `${myLibrary[i].title}`;
        newAuthorDiv.textContent = `${myLibrary[i].author}`;
        newPageDiv.textContent = `${myLibrary[i].pages} pages`;

        newCoverImgDiv.setAttribute("src", `${myLibrary[i].url}`);
        newCoverImgDiv.setAttribute("height", "150");
        newCoverImgDiv.setAttribute("width", "100");

        deleteButton.setAttribute('data-id', myLibrary[i].id);

        deleteButton.addEventListener('click', (e) => {
            const idToDelete = e.currentTarget.getAttribute('data-id');
            for (let j = 0; j < myLibrary.length; j++) {
                if (myLibrary[j].id === idToDelete) {
                    myLibrary.splice(j, 1);
                    break;
                }
            }
            displayBook();
        });

        readButton.addEventListener('click', (e) => {
            if (readButton.classList.contains("haveNotRead")) {
                readButton.classList.remove('haveNotRead');
                readButton.classList.add('haveRead');
            }
            else {
                readButton.classList.remove('haveRead');
                readButton.classList.add('haveNotRead');
            }
            
        });

        newDiv.appendChild(newCoverImgDiv);
        newDiv.appendChild(newTitleDiv);
        newDiv.appendChild(newAuthorDiv);
        newDiv.appendChild(newPageDiv);
        newDiv.appendChild(readButton);
        newDiv.appendChild(deleteButton);

        existingDiv.appendChild(newDiv);
  
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
const showButton = document.querySelector("#add");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector("#submit");

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('close clicked');
    dialog.close();
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const userData = getInputValue();
    addBookToLibrary(userData.titleValue, userData.authorValue, userData.pagesValue, userData.urlValue);
    displayBook();
    dialog.close();
})

addBookToLibrary("Harry Potter and the Sorcerers Stone", "J. K. Rowling", 223, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBe8CKdq1DMUFU2gWHU6MSix4eczSInFBIpg&s");
addBookToLibrary("Atomic Habits", "James Clear", 320, "https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF1000,1000_QL80_.jpg");
addBookToLibrary("The Way of Zen", "Alan Watts", 256, "https://m.media-amazon.com/images/I/61pDzhG+wCL._AC_UF1000,1000_QL80_.jpg");
displayBook();