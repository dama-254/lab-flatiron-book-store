
// Books array
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "url_here" },
  { title: "1984", author: "George Orwell", image: "url_here" }
];

// 1. Update header
const mainHeader = document.getElementById("header");
mainHeader.textContent = "Flatbook Bookstore";

// 2. Select container
const bookListContainer = document.getElementById("book-list");

// 3. Remove template book
const template = document.getElementById("delete-this");
if (template) {
  template.remove();
}

// 4. Loop through books
books.forEach(book => {

  // Create book container (LI as required)
  const bookContainer = document.createElement("li");

  // Create title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  // Create author
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;

  // Create image
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = book.title;

  // Append elements
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append to DOM
  bookListContainer.appendChild(bookContainer);
});