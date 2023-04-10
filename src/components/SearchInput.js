const SearchInput = ({value, onChange}) =>{

    return(
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={value}
            onChange={onChange}
          />
        </div>
    );
}
export default SearchInput;