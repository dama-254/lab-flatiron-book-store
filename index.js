
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


const bookList = document.querySelector('#book-list');


const placeholder = document.querySelector('#delete-this');
if (placeholder) {
    placeholder.remove();
}

books.forEach(book => {
    // CRITERIA: Create elements with these exact variable names
    const bookContainer = document.createElement('li'); 
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // Assign data from the object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // --- 4. Append elements to existing DOM element ---
    // First: Nest the info inside the container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

 bookList.appendChild(bookContainer); 
});