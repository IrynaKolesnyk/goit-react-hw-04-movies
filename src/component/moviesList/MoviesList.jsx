import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesList extends Component {
  state = {};
  render() {
    return (
      <ul>
        {this.props.moviesData.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                // state: location,
              }}
            >
              <img
                src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                alt={movie.title}
                className="homeImg"
              />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default MoviesList;
