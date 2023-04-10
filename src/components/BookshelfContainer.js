import { Link } from "react-router-dom";
import Header from "./Header";
import Bookshelf from "./Bookshelf";


const BookshelfContainer = ({books, updateBookShelf}) => {
  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');
  
  return (
        <div className="list-books">
          <Header/>
          <div className="list-books-content">
            <div>
              <Bookshelf title="Currently Reading" books={currentlyReading} updateBookShelf={updateBookShelf} />
              <Bookshelf title="Want To Read" books={wantToRead} updateBookShelf={updateBookShelf} />
              <Bookshelf title="Read" books={read} updateBookShelf={updateBookShelf} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
                Add a book
            </Link>
          </div>
        </div>
    );
}

export default BookshelfContainer;