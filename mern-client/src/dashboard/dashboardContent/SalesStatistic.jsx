import React from "react";

const SalesStatistic = () => {
  const salesData = [
    { week: 1, sales: 1200 },
    { week: 2, sales: 1500 },
    { week: 3, sales: 1800 },
    { week: 4, sales: 1400 },
  ];

  const maxSales = Math.max(...salesData.map((data) => data.sales));

  const barColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]; // Google-like colors

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {" "}
      {/* Card-like styling */}
      <h2 className="font-bold text-xl mb-4 text-gray-800">Sales Statistics</h2>
      <div className="h-60 flex items-end justify-between space-x-4">
        {" "}
        {/* Container for bars */}
        {salesData.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-12 rounded-t-lg" // Bar width and rounded corners
              style={{
                height: `${(data.sales / maxSales) * 100}%`, // Set height based on sales
                backgroundColor: barColors[index % barColors.length], // Color cycling
                transition: "height 0.3s ease-in-out", // Smooth transition for height changes
              }}
            ></div>
            <p className="text-sm mt-2 text-gray-600">Week {data.week}</p>
            <p className="text-xs mt-1 text-gray-500">${data.sales}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesStatistic;
