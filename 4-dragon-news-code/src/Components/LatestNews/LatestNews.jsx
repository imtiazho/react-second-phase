import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-4 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          voluptatibus animi nulla excepturi ipsum sequi officiis explicabo vero
          inventore aperiam!
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          voluptatibus animi nulla excepturi ipsum sequi officiis explicabo vero
          inventore aperiam!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
