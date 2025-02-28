import React, { useState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const bookStatuses = ["available", "unavailable"]; // Status options
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const [selectedBookStatus, setSelectedBookStatus] = useState(bookStatuses[0]); // Default status

  const handleChangeCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setSelectedBookStatus(event.target.value);
  };

  // Handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.bookTitle.value;
    const author = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const description = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const status = form.bookStatus.value;
    const price = form.bookPrice.value;

    const bookObj = {
      title,
      author,
      imageURL,
      category,
      description,
      bookPDFURL,
      status,
      price,
    };

    console.log("Book Data:", bookObj);

    // Send data to backend
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!");
        form.reset();
      })
      .catch((error) => console.error("Error uploading book:", error));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* 1st Row: Title & Author */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/* 2nd Row: Image URL & Category */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="imageURL" value="Book Image URL" />
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book cover image URL"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="categoryName" value="Book Category" />
            <select
              name="categoryName"
              id="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeCategory}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3rd Row: Book Description */}
        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write a book description..."
            required
            rows={5}
          />
        </div>

        {/* 4th Row: PDF Link & Price */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              type="text"
              placeholder="Book PDF link"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="bookPrice" value="Book Price" />
            <TextInput
              id="bookPrice"
              name="bookPrice"
              type="number"
              placeholder="Enter book price"
              required
            />
          </div>
        </div>

        {/* 5th Row: Book Status */}
        <div>
          <Label htmlFor="bookStatus" value="Book Status" />
          <select
            name="bookStatus"
            id="bookStatus"
            className="w-full rounded"
            value={selectedBookStatus}
            onChange={handleChangeStatus}
          >
            {bookStatuses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
