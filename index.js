function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") //  Fetch data from API
    .then(response => response.json()) 
    .then(data => {
      renderBooks(data); // Pass data to renderBooks function
      return data; // Return data so tests can verify it
    })
    .catch(error => console.error("Error fetching books:", error)); // Handle errors
}

// Ensure `renderBooks` is globally accessible
function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  books.forEach(book => {
    const li = document.createElement("li"); 
    li.textContent = book.name; 
    bookList.appendChild(li);
  });
}

// Run `fetchBooks` when page loads
document.addEventListener("DOMContentLoaded", fetchBooks);

//  Export `fetchBooks` so it can be tested
if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
