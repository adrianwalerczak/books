// W pliku script.js

const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "The Da Vinci Code", author: "Dan Brown" },
    { title: "The Shining", author: "Stephen King" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez" },
    { title: "The Hunger Games", author: "Suzanne Collins" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
    { title: "A Song of Ice and Fire", author: "George R.R. Martin" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Wuthering Heights", author: "Emily Bronte" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Road", author: "Cormac McCarthy" }

        ];

const itemsPerPage = 10; // Liczba książek na stronie
let currentPage = 1;

const bookList = document.getElementById("bookList");
const pagination = document.getElementById("pagination");

function displayBooks(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedBooks = books.slice(startIndex, endIndex);

    bookList.innerHTML = "";
    displayedBooks.forEach((book) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

function updatePagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(books.length / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement("li");
        li.className = "page-item";
        const a = document.createElement("a");
        a.className = "page-link";
        a.href = "#";
        a.textContent = i;
        a.addEventListener("click", (event) => {
            event.preventDefault();
            currentPage = i;
            displayBooks(currentPage);
            updatePagination();
        });
        li.appendChild(a);
        pagination.appendChild(li);
    }
}

displayBooks(currentPage);
updatePagination();
