import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className=" text-3xl py-4 text-white pb-3 mt-3 mb-3">{title}</h1>
      <div className="flex overflow-x-scroll  scrollbar-hide pt-3">
        <div className=" flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
