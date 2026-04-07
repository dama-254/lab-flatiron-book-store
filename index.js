// CRITERIA 1: Select and change header
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

// Remove the placeholder
const placeholder = document.querySelector('#delete-this');
if (placeholder) {
    placeholder.remove();
}

// CRITERIA 2 & 3: Create and Append
books.forEach(book => {
    // Create elements with specific names the rubric wants
    const bookContainer = document.createElement('li'); 
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // Nest the elements inside the container (li)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // CRITICAL: Append the container to the list (ul)
    bookList.appendChild(bookContainer);
});