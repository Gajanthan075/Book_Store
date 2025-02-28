import React, { useEffect, useState } from "react";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  // Fetch all books from the backend and show only the first 5
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        // Slice the data to get only the first 5 books
        const topFiveBooks = data.slice(0, 8);
        setPopularBooks(topFiveBooks);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Popular Books</h2>
      {popularBooks.length > 0 ? (
        popularBooks.map((book) => (
          <div
            key={book._id}
            className="flex justify-between items-center mb-4 border-b pb-2"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="font-semibold">{book.bookTitle}</p>
                <p className="text-sm text-gray-500">{book.category}</p>
                <p className="text-sm text-gray-500">by {book.authorName}</p>
              </div>
            </div>
            <p className="text-green-500 font-bold">$15.00</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No popular books available.</p>
      )}
    </div>
  );
};

export default PopularBooks;
