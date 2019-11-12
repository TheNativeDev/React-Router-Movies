import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movie = props => {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovieInfo(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movieInfo);
  };

  return movieInfo ? (
    <MovieCard movieInfo={movieInfo} saveMovie={saveMovie} />
  ) : (
    <div>Loading movie information...</div>
  );
};

export default Movie;