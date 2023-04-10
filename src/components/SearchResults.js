import Book from "./Book";
import PropTypes from "prop-types";


const SearchResults = ({ searchResults, addBookToShelf }) => {


  return (
    <div className="search-books-results">
      {(searchResults && searchResults.length>0) ? (
      <ol className="books-grid">
          { searchResults.map((result) => (
          <li key={result.id}>
            <Book book={result} updateBookShelf={addBookToShelf}/>
          </li>
        ))  }
        
      </ol>
      ) :
      (<div className="bookshelf-books">
        <p>No Books Found.</p>
      </div>)}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.oneOf(["currentlyReading", "wantToRead", "read", "none"]),
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    })
  ),
  addBookToShelf: PropTypes.func.isRequired,
};

export default SearchResults;
