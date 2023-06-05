import { useState } from "react";
import BookCard from "./components/BookCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./styles/app.css";

// TODO: Create a component for the search results item
// TODO: Create a component for the search results
// TODO: Settings component
// TODO: Create light/dark mode
// TODO: Store data in local storage.
// TODO: (maybe) store saved items in localstorage, accessible by clicking on {user} in the header.
// TODO: Multiple languages

function App() {
  const [queryString, setQueryString] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  return (
    <>
      <Header />
      <main className="container bg-red-200 w-screen mx-44">
        <SearchBar
          setQueryResults={setQueryResults}
          setQueryString={setQueryString}
        />
        {queryResults.length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {queryResults.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
