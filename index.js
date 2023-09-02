import books from "./books.js";
import bubbleSort from "./bubble-sort.js";
import binarySearch from "./binary-search.js";

const [, , bookTittleToSearch = "El gran Gatsby" ] = process.argv;

const sortedBooks = bubbleSort(books, (a, b) => a.title > b.title);
// console.log(sortedBooks.map((book) => book.title));

const index = binarySearch(sortedBooks, bookTittleToSearch, "title");

if (index !== null) {
  console.log("Libro encontrado en el índice:", index, sortedBooks[index]);
} else {
  console.log("Libro no encontrado");
}