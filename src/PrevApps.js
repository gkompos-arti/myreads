import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


function PrevApps() {
  let navigate = useNavigate();


  const [showSearchPage, setShowSearchpage] = useState(true);

  useEffect


  return (
    <div className="app">

      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>

      ) : (

        
      )}
    
    </div>
  );
}

export default PrevApps;
