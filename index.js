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

// Task 1: Update the header
const header = document.querySelector('#header');
header.textContent = bookStore.name;

// Task 2: Remove placeholder li
const placeholder = document.querySelector('#delete-this');
if (placeholder) placeholder.remove();

// Task 3: Create and append elements for every book
const bookList = document.querySelector('#book-list');

bookStore.books.forEach(book => {
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;
  bookImage.alt = book.title;

  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);

  bookList.appendChild(bookContainer);
});
