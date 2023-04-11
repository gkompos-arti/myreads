import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookshelfContainer from "./components/BookshelfContainer";
import SearchModal from "./components/SearchModal";
import * as BooksAPI from "./BooksAPI";
import NotFound from "./components/NotFound";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  const updateBookShelf = (book, shelf) => {
    const update = async () => {
      const res = await BooksAPI.update(book, shelf);
      setBooks((prevBooks) => prevBooks.map((prevBook) => 
          prevBook.id === book.id ? { ...prevBook, shelf } : prevBook
        )
      );
    };
    update();
  };

  const searchBooks = (query) => {
    const search = async () => {
      const res = await BooksAPI.search(query);
      try {
        if(res.error ==="empty query"){
          setSearchResults([]);
        }
        else{
          setSearchResults(res);
        }
      } catch (error) {
        console.log("Error in API Request")
        setSearchResults([]);
      }

    };
    search();
  }

  const addBookToShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      setBooks((prevBooks) =>
        prevBooks.map((prevBook) =>
          prevBook.id === book.id ? { ...prevBook, shelf } : prevBook
        )
      );
      setSearchResults((prevResults) =>
        prevResults.map((prevResult) =>
          prevResult.id === book.id ? { ...prevResult, shelf } : prevResult
        )
      );
    };
    update();
  };

  

  useEffect(() => {
    getBooks();
    return () => {
      setSearchResults([]);
    };
  }, []);


  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookshelfContainer books={books} updateBookShelf={updateBookShelf}/>
        }
      />
      <Route 
        path="/search"
        element={
          <SearchModal searchBooks={searchBooks} searchResults={searchResults} addBookToShelf={addBookToShelf} books={books} getBooks={getBooks} setSearchResults={setSearchResults}/>
        }
      />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
