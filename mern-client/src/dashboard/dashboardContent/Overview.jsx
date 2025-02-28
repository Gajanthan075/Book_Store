import React, { useEffect, useState } from "react";
import TopSellers from "./TopSellers";
import MostReadBooks from "./MostReadBooks";

const Overview = () => {
  const [statistics, setStatistics] = useState({
    booksSold: 0,
    booksAvailable: 0,
  });

  useEffect(() => {
    // Fetch sold books data
    fetch("http://localhost:5000/books-statistics")
      .then((response) => response.json())
      .then((data) => {
        setStatistics((prev) => ({
          ...prev,
          booksSold: data.booksSold, // Only updating booksSold here
        }));
      })
      .catch((error) =>
        console.error("Error fetching books statistics:", error)
      );

    // Fetch available books data
    fetch("http://localhost:5000/count-available-books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response
        setStatistics((prev) => ({
          ...prev,
          booksAvailable: data.availableBooks, // Only updating booksAvailable here
        }));
      })
      .catch((error) =>
        console.error("Error fetching available books count:", error)
      );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="font-bold text-xl mb-4">Overview</h2>
      <div className="flex justify-between mb-4">
        {/* Books Sold */}
        <div className="bg-green-100 p-4 rounded-lg text-green-600 w-1/2 mr-2">
          <h3 className="font-semibold">Books Sold</h3>
          <p className="text-lg">{statistics.booksSold.toLocaleString()}</p>
          <p className="text-sm text-green-500">+20%</p>{" "}
          {/* Add percentage logic if required */}
        </div>

        {/* Books Available */}
        <div className="bg-blue-100 p-4 rounded-lg text-blue-600 w-1/2 ml-2">
          <h3 className="font-semibold">Books Available</h3>
          <p className="text-lg">
            {(statistics.booksAvailable || 0).toLocaleString()}
          </p>
          {statistics.previousBooksAvailable !== undefined &&
          statistics.previousBooksAvailable !== 0 ? (
            <p className="text-sm text-blue-500">
              {(
                ((statistics.booksAvailable -
                  statistics.previousBooksAvailable) /
                  statistics.previousBooksAvailable) *
                100
              ).toFixed(2)}
              %
            </p>
          ) : (
            <p className="text-sm text-blue-500">No previous data</p>
          )}
        </div>
      </div>
      <TopSellers />
      <MostReadBooks />
    </div>
  );
};

export default Overview;
