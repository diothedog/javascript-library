const myLibrary = [];
const body = document.querySelector("tbody");
const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const cancel = document.querySelector("#cancel");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(library) {
    // Clear table body
    while(body.firstElementChild) {
        body.firstElementChild.remove();
    }

    // Add each book row to table body
    library.forEach((book) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.pages}</td>
                        <td>${book.read}</td`;
        row.classList.add("book-row");
        body.appendChild(row);

        // Add remove button to row
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        const removeCell = document.createElement("td");
        row.append(removeCell);
        removeCell.append(removeButton);

        removeButton.addEventListener("click", () => {
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
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



