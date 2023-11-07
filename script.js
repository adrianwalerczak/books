   // Tablica książek
        
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



        // Ilość książek na stronę
        const booksPerPage = 20;
        let currentPage = 1;

        // Funkcja do wyświetlania listy książek
        function displayBooks(books) {
            const bookList = document.getElementById("bookList");
            bookList.innerHTML = ""; // Wyczyść listę przed wyświetleniem nowych wyników

            // Oblicz zakres książek do wyświetlenia na bieżącej stronie
            const startIndex = (currentPage - 1) * booksPerPage;
            const endIndex = startIndex + booksPerPage;
            const currentBooks = books.slice(startIndex, endIndex);

            currentBooks.forEach(book => {
                const listItem = document.createElement("li");
                listItem.textContent = `${book.title} - ${book.author}`;
                bookList.appendChild(listItem);
            });

            // Aktualizuj paginację
            updatePagination(books.length);
        }

        // Funkcja do aktualizacji paginacji
        function updatePagination(totalBooks) {
            const pagination = document.getElementById("pagination");
            pagination.innerHTML = "";

            const totalPages = Math.ceil(totalBooks / booksPerPage);
            for (let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement("li");
                pageItem.classList.add("page-item");
                const pageLink = document.createElement("a");
                pageLink.classList.add("page-link");
                pageLink.textContent = i;
                pageLink.addEventListener("click", () => {
                    currentPage = i;
                    displayBooks(books);
                });
                pageItem.appendChild(pageLink);
                pagination.appendChild(pageItem);
            }
        }

        // Obsługa wyszukiwania książek w czasie rzeczywistym
        const searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
            );
            displayBooks(filteredBooks);
        });

        // Wyświetl wszystkie książki na początek
        displayBooks(books);
