import React, { useState } from "react";

// Blog Component
const Blog = () => {
  const [showMore, setShowMore] = useState({});

  const handleReadMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the visibility of the content
    }));
  };

  const blogPosts = [
    {
      title: "The Power of Fiction: A Deep Dive into '1984'",
      content:
        "George Orwell’s “1984” is a profound exploration of the dangers of totalitarianism and the importance of individuality. This novel offers a chilling look at a dystopian world where the government controls not just the people’s actions, but their thoughts as well. Orwell’s portrayal of a society under constant surveillance reminds us of the significance of freedom and the personal struggle to maintain it.",
    },
    {
      title: "The Catcher in the Rye: A Journey Through Teenage Alienation",
      content:
        "J.D. Salinger’s “The Catcher in the Rye” is an iconic coming-of-age novel that delves into the complex emotions of adolescence. Through the eyes of Holden Caulfield, we witness the intense loneliness and disillusionment that often accompany the transition from childhood to adulthood. Holden’s voice remains one of the most authentic and relatable in literature.",
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      content:
        "Yuval Noah Harari's 'Sapiens' offers a thought-provoking exploration of human history from the dawn of Homo sapiens to modern times. Harari examines the forces that shaped human societies, from the cognitive revolution to the rise of capitalism and imperialism. This book challenges the conventional narrative and urges us to think critically about the direction of our future.",
    },
    {
      title: "Educated: A Memoir of a Young Girl's Struggle for Education",
      content:
        "Tara Westover’s memoir ‘Educated’ is a powerful story of a young woman’s journey from a strict, survivalist family to the academic world. Tara's quest for education is inspiring and highlights the importance of self-discovery, resilience, and the pursuit of knowledge in the face of adversity. The memoir is a testament to the transformative power of education.",
    },
    {
      title: "Becoming: Michelle Obama's Journey to the White House",
      content:
        "Michelle Obama's ‘Becoming’ is an intimate memoir that chronicles the former First Lady’s life from her humble beginnings to her role in the White House. In this book, she reflects on her struggles, triumphs, and the lessons she has learned along the way. Her story is one of perseverance, identity, and the importance of staying true to oneself.",
    },
  ];

  return (
    <div className="w-7/10 bg-gray-50 p-4">
      <div className="flex flex-col p-5">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 p-5 mb-10">
            <h1 className="font-bold text-2xl mb-2">{post.title}</h1>
            <p className="my-3">
              {showMore[index]
                ? post.content
                : post.content.slice(0, 150) + "..."}
            </p>
            <button
              className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded"
              onClick={() => handleReadMore(index)}
            >
              {showMore[index] ? "Read Less" : "Read More..."}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// CreateBlog Component (No changes needed here)
const CreateBlog = () => {
  return (
    <div className="w-3/10 bg-gray-100 p-6 flex flex-col justify-center">
      <div className="relative bg-white shadow rounded-3xl p-6 sticky top-0 z-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-yellow-200 rounded-full flex justify-center items-center text-yellow-500 text-2xl font-mono">
              i
            </div>
            <div className="pl-2 font-semibold text-xl text-gray-700">
              <h2 className="leading-relaxed">New Post</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Create a new post then press the create button
              </p>
            </div>
          </div>
          <div className="divide-y divide-gray-200 mt-4">
            <div className="py-4 space-y-4">
              <div className="flex flex-col">
                <label className="leading-loose">Post Title</label>
                <input
                  type="text"
                  className="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                  placeholder="Book title"
                />
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Post Content</label>
                <textarea
                  className="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                  placeholder="Write your post here"
                />
              </div>
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
              <button className="bg-blue-500 w-full text-white px-4 py-3 rounded-md focus:outline-none">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component to Combine Blog and CreateBlog
const BlogLayout = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <div className="flex">
        <Blog />
        <div>
          <CreateBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
