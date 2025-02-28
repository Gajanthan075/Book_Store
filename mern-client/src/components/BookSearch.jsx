import React, { useState, useEffect } from "react";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setError("");
        const response = await fetch(
          `http://localhost:5000/search?q=${query.trim()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching search results.");
      }
    };

    const debounceFetch = setTimeout(fetchResults, 300); // Debounce API calls
    return () => clearTimeout(debounceFetch);
  }, [query]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Books</h1>
      <input
        type="search"
        placeholder="Search a book"
        className="py-2 px-3 border border-gray-300 rounded-md w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((book) => (
              <li key={book._id} className="border-b py-2">
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        ) : (
          query && !error && <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
