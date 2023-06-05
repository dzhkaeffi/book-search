/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const fetchBooks = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );
  const data = await response.json();
  return data.items;
};

function SearchBar({ setQueryString, setQueryResults }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        fetchBooks(query).then((books) => {
          console.log(books);
          setResults(books);
        });
      }
    }, 750);
    return () => clearTimeout(timeoutId);
  }, [query]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        setQueryString(query);
        setQueryResults(results);
      }
    }, 750);
    return () => clearTimeout(timeoutId);
  }, [query, results, setQueryResults, setQueryString]);
  return (
    <>
      <div className="group relative">
        <span
          className="absolute group__icon top-4 opacity-0 left-3 group-focus-within:opacity-100
        group-focus-within:duration-300"
        >
          <i className="absolute fas fa-search"></i>
        </span>
        <input
          className="rounded text-xl group-focus-within:pl-10 p-2 duration-150 border-2 border-slate-700 pl-4"
          type="text"
          value={query}
          onChange={handleOnChange}
          placeholder="ex. Harry Potter"
        />
      </div>
    </>
  );
}

export default SearchBar;
