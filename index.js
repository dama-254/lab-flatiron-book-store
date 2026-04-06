
// Book data (use your provided object if given)
const books = [
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    image: "https://eloquentjavascript.net/img/cover.jpg"
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"
  }
];

// ✅ 1. CHANGE HEADER TEXT (EXACT MATCH REQUIRED)
const header = document.getElementById("main-title");
header.textContent = "Flatbooks Technical Books";

// ✅ 2. SELECT BOOK LIST
const bookList = document.getElementById("book-list");

// ✅ 3. LOOP THROUGH BOOKS
books.forEach(book => {

  // Create container
  const bookContainer = document.createElement("div");

  // Create title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;

  // Create author
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;

  // Create image
  const bookImage = document.createElement("img");
  bookImage.src = book.image;

  // Append to container
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append to DOM
  bookList.appendChild(bookContainer);
});



