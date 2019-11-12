import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <div className="home-button">
      <NavLink exact to="/" activeClassName="saved-active">
        Home
      </NavLink>
    </div>
  </div>
);

export default SavedList;