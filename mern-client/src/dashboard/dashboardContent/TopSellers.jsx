import React from "react";
import profile from "../../assets/profile.jpg";

const TopSellers = () => {
  return (
    <div>
      <h3 className="font-bold mb-2">Top Sellers</h3>
      <div className="flex space-x-4">
        {["Alice", "Bob", "Charlie", "David", "Eve"].map((seller, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full">
              <img src={profile} alt="" className="rounded-full" />
            </div>
            <p className="text-sm mt-2">{seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
