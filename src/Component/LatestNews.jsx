import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className=" flex items-center gap-3 bg-base-200 p-4">
      <p className=" bg-secondary text-base-100  px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className=" font-semibold text-gray-600 ms-4">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>

        <p className=" font-semibold text-gray-600 ms-4">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>

        <p className=" font-semibold text-gray-600 ms-4">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
