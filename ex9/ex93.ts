interface Book {
    title: string;
    author: string;
    publisher: string;
}

const books: Book[]  = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Scribner" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", publisher: "J.B. Lippincott & Co." },
    { title: "1984", author: "George Orwell", publisher: "Secker & Warburg" },
    { title: "Pride and Prejudice", author: "Jane Austen", publisher: "T. Egerton" },
    { title: "Brave New World", author: "Aldous Huxley", publisher: "Chatto & Windus" }
];

books.sort((a,b)=>b.author.localeCompare(a.author));
// books.sort();
console.log("Books sorted by author:");
books.forEach(book => {
    console.log(`Title: "${book.title}", Author: ${book.author}, Publisher: ${book.publisher}`);
});
