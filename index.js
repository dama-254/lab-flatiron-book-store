// 1. HEADER FIX (Check for 's' and exact ID)
const header = document.querySelector('#header');
if (header) {
    header.textContent = "Flatbooks Technical Books";
}

const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/51IkWP9Tg9L._SX373_BO1,204,203,200_.jpg"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    image: "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX379_BO1,204,203,200_.jpg"
  },
  {
    title: "Learn JavaScript VISUALLY",
    author: "Ivelin Demirov",
    image: "https://images-na.ssl-images-amazon.com/images/I/51767m593vL._SX384_BO1,204,203,200_.jpg"
  }
];

// 2. SELECTION FIX
const bookList = document.querySelector('#book-list');

// 3. REMOVE PLACEHOLDER
const placeholder = document.querySelector('#delete-this');
if (placeholder) {
    placeholder.remove();
}

// 4. THE LOOP (Must create li, h3, p, img)
books.forEach(book => {
    const bookContainer = document.createElement('li'); 
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // NESTING (Title/Author/Img go INSIDE the li)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // APPEND TO DOM (The li goes INSIDE the ul)
    if (bookList) {
        bookList.appendChild(bookContainer);
    }
});

console.log("DOM processing complete.");