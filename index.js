const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
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
  ]
};

// Step 2: Select and update header
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Step 3: Loop through books and build elements
const bookList = document.getElementById('book-list');

bookStore.books.forEach(book => {
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  bookList.appendChild(bookContainer);
});

