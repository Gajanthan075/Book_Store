import React from "react";
import profile from "../../assets/profile.jpg";

const Comment = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Comments & Reviews</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
            <img src={profile} className="rounded-full" />
          </div>
          <div>
            <p className="font-semibold">Alice</p>
            <p className="text-sm text-gray-500">5 Minutes Ago</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Reply
        </button>
      </div>
      <p className="text-gray-500 text-sm">
        Great collection of books! I found exactly what I needed.
      </p>
      <div className="flex justify-between items-center mb-4 py-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
            <img src={profile} className="rounded-full" />
          </div>
          <div>
            <p className="font-semibold">Alice</p>
            <p className="text-sm text-gray-500">5 Minutes Ago</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Reply
        </button>
      </div>
      <p className="text-gray-500 text-sm">
        Great collection of books! I found exactly what I needed.
      </p>
    </div>
  );
};

export default Comment;
