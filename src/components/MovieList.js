import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 1450,
      behavior: "smooth",
    });
  };

  if (!movies || movies.length === 0) {
    return (
      <div className="text-white text-lg py-4">
        {title}: No movies available
      </div>
    );
  }

  return (
    <div>
      <h1 className=" text-3xl py-4 text-white pb-3 mt-3 mb-3">{title}</h1>
      <div className="flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-2 bg-white bg-opacity-10 text-white p-4 h-56 rounded-lg hover:bg-opacity-40 z-10 hover:scale-110 transition-transform"
        >
          {"<"}
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide pt-3"
        >
          <div className=" flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-2 bg-white bg-opacity-10 text-white p-4 h-56 rounded-lg z-10 hover:bg-opacity-40 hover:scale-110 transition-transform"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieList;
