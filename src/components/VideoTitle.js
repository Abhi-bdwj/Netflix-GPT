import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-white bg-gray-500 p-3 px-12 text-lg bg-opacity-50 rounded-lg">
          ▶ Play
        </button>
        <button
          className="text-white m-2 bg-gray-500 p-3 px-10 text-lg bg-opacity-50 rounded-lg"
          s
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
