import { debounce } from "lodash";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchModal = ({ searchBooks, searchResults, addBookToShelf, books, getBooks}) => {
  const [query, setQuery] = useState("");

  const debounceSearch = debounce(searchBooks, 300);

  useEffect(() => {
    getBooks();
    return () => {
      
    };
  }, [books]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setQuery(value);
    debounceSearch(value);
  };
  
  const updatedSearchResults = searchResults.map((result) => {
    const bookInShelf = books.find((book) => book.id === result.id);
    if (bookInShelf) {
      return {
        ...result,
        shelf: bookInShelf.shelf,
      };
    } else {
      return result;
    }
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => {setQuery("");searchResults(query);}}>
          Close
        </Link>
        <SearchInput onChange={handleSearch} value={query} />
      </div>
      <SearchResults searchResults={updatedSearchResults} addBookToShelf={addBookToShelf}/>
    </div>
  );
};

export default SearchModal;