// Book data
const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    title: "The River Between",
    author: "Ngũgĩ wa Thiong'o",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
  }
];

// STEP 1: Change title
const title = document.getElementById("main-title");
title.textContent = "Flatbooks Bookstore";

// STEP 2: Select book list container
const bookList = document.getElementById("book-list");

// STEP 3: Loop through books
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

  // Add elements to container
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Add container to page
  bookList.appendChild(bookContainer);
});


// const bookStore = {
//     name: 'Flatbooks Technical Books',
//     books: [
//         {
//             id:1,
//             title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//             author: 'Marjin Haverbeke',
//             imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
//         },
//         {
//             id:2,
//             title: 'JavaScript & JQuery: Interactive Front-End Web Development',
//             author: 'Jon Duckett',
//             imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
//         },
//         {
//             id:3,
//             title: 'JavaScript: The Good Parts',
//             author: 'Douglas Crockford',
//             imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
//         },
//         {
//             id:4,
//             title: 'JavaScript: The Definitive Guide',
//             author: 'David Flanagan',
//             imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
//         },
//         {
//             id:5,
//             title: 'You Don’t Know JS',
//             author: 'Kyle Simpson',
//             imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
//         },
//         {
//             id:6,
//             title: 'Cracking the Coding Interview',
//             author: 'Gayle Laakmann McDowell',
//             imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
//         }
//     ]
// }

// // Write your code here!

