import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-black bg-white p-3 px-12 text-lg  bg-opacity-80 rounded-lg hover:bg-opacity-40">
          <div className="flex items-center">
            <PlayIcon className="h-5 w-5 mr-2" />
            <span>Play</span>
          </div>
        </button>
        <button className="text-white m-2 bg-gray-500 p-3 px-10 text-lg bg-opacity-80 rounded-lg hover:bg-opacity-40">
          <div className="flex items-center">
            <InformationCircleIcon className="h-5 w-5 mr-2" />

            <span>More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
