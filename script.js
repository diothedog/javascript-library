const myLibrary = [];
const tbody = document.querySelector("tbody");
const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = form.elements["read"];
const cancel = document.querySelector("#cancel");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(library) {
    // Clear table body
    while(tbody.firstElementChild) {
        tbody.firstElementChild.remove();
    }

    // Add each book row to table body
    library.forEach((book) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.pages}</td>
                        <td>${book.read}</td`;
        row.classList.add("book-row");
        tbody.appendChild(row);

        // Add remove button to row
        const removeButton = document.createElement("button");
        removeButton.textContent = "REMOVE";
        const removeCell = document.createElement("td");
        row.append(removeCell);
        removeCell.append(removeButton);

        // Remove book from library on click
        removeButton.addEventListener("click", () => {
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
        });

        // Add read toggle button to row
        const readToggle = document.createElement("button");
        readToggle.textContent = "TOGGLE READ";
        const toggleCell = document.createElement("td");
        row.append(toggleCell);
        toggleCell.append(readToggle);

        // Toggle read on click
        readToggle.addEventListener("click", () => {
            if (book.read === "yes") {
                book.read = "no";
            } else {
                book.read = "yes";
            }
            displayBooks(myLibrary);
        });
    });
}

newBook.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value;
    addBookToLibrary(title, author, pages, read);
    displayBooks(myLibrary);
    form.reset();
    dialog.close();
});

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

// Add a couple of example books to library and display
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, "yes");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 565, "no");
displayBooks(myLibrary);


