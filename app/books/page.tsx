const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];  
export default function Books() {   
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className='text-5xl'>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2 className='text-xl'>{book.title}</h2>
            <p className='text-gray-600'>by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}