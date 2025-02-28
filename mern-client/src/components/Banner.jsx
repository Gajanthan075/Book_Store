import React from "react";
import BannerCard from "../home/BannerCard";
import BookSearch from "./BookSearch";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-column md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Article writing is a process of creating written pieces of content,
            paragraphs to reach a broad audience through different platforms.
            These platforms include newspapers, magazines, journals, and other
            publishing mediums.
          </p>
          <div>
            <BookSearch />
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
