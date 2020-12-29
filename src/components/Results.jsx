import React, { useState, useEffect } from "react";
import "./results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  useEffect(() => {
    // wrap this in try and catch

    const fetchData = axios
      .get(`${baseUrl}${selectedOption}`)
      .then(response => {
        // handle success
        console.log(response);
        setMovies(response.data.results);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie, i) => (
        // console.log(movie)
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
