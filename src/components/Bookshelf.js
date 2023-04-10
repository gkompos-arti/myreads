import Book from "./Book";

const Bookshelf = ({title, books, updateBookShelf}) => {
    
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        {
                books.length === 0 ? 
                (<p>No Books in this Shelf.</p>) :
                (
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                    ))}
                  </ol>
                )}
        </div>
      </div>
    );
};
export default Bookshelf;