import PropTypes from "prop-types";

const Book = ({book, updateBookShelf}) => {
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => updateBookShelf(book, e.target.value)}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {book.shelf && <option value="none">None</option>}
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        {book.authors && (
        <div className="book-authors">
          {
            book.authors.map(author => (
              <div key={author}>{author}</div>
            ))
          }
        </div>
        )}
      </div>
    );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.oneOf(["currentlyReading", "wantToRead", "read", "none"]),
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;