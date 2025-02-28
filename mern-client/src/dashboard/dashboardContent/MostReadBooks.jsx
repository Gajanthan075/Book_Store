import React, { useEffect, useState } from "react";
import Cards from "../dashboardContent/cards";

const MostReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Sort books by 'readCount' (assuming readCount exists in your data) in descending order
        const mostReadBooks = data.sort((a, b) => b.readCount - a.readCount);
        // Optionally, slice to show a limited number of top books, for example top 4
        setBooks(mostReadBooks.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <Cards books={books} headline="Most Read Books" />
    </div>
  );
};

export default MostReadBooks;
