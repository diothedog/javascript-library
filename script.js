const myLibrary = [];

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
    // Select table body
    let body = document.querySelector("tbody");

    // Clear table body
    while(body.firstElementChild) {
        body.firstElementChild.remove();
    }

    // Add each book to table body
    library.forEach((book) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.pages}</td>
                        <td>${book.read}</td`;
        row.classList.add("book-row");
        body.appendChild(row);
    });
}

