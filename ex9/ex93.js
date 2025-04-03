var books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Scribner" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", publisher: "J.B. Lippincott & Co." },
    { title: "1984", author: "George Orwell", publisher: "Secker & Warburg" },
    { title: "Pride and Prejudice", author: "Jane Austen", publisher: "T. Egerton" },
    { title: "Brave New World", author: "Aldous Huxley", publisher: "Chatto & Windus" }
];
books.sort(function (a, b) { return a.author.localeCompare(b.author); });
console.log("Books sorted by author:");
books.forEach(function (book) {
    console.log("Title: \"".concat(book.title, "\", Author: ").concat(book.author, ", Publisher: ").concat(book.publisher));
});
