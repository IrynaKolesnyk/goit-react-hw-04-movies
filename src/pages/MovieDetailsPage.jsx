import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { fetchMovieDetails } from "../services/Api";
import MovieDetailsPageStyled from "../styles/MovieDetailsPageStyled";
import Reviews from "../pages/Reviews";
import Cast from "./Cast";

class MovieDetailsPage extends Component {
  state = {
    moviesDetails: {},
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await fetchMovieDetails(id)
      .then((results) => this.setState({ moviesDetails: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { moviesDetails } = this.state;
    const id = this.props.match.params.id || "";

    return (
      <div className="container">
        {moviesDetails.id ? (
          <MovieDetailsPageStyled>
            <div className="wrapper">
              <img
                src={
                  "https://image.tmdb.org/t/p/w300" + moviesDetails.poster_path
                }
                alt={moviesDetails.original_title}
                className="detailsImg"
              />
              <div>
                <h2 className="detailsTitle">{moviesDetails.original_title}</h2>
                <h3 className="detailsSubtitle">Overview</h3>
                <p className="detailsOverview">{moviesDetails.overview}</p>
                <h3 className="detailsSubtitle">Genres</h3>
                <ul className="detailsList">
                  {moviesDetails.genres.map((genre) => (
                    <li className="detailsItem" key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    className="detailseLink reviews"
                    to={`/movies/${id}/reviews`}
                  >
                    Reviews
                  </Link>
                  <Link className="detailseLink" to={`/movies/${id}/cast`}>
                    Cast
                  </Link>
                </div>
              </div>
            </div>

            <div className="castReviews">
              <Switch>
                <Route path="/movies/:id/reviews" exact component={Reviews} />
                <Route path="/movies/:id/cast" exact component={Cast} />
              </Switch>
            </div>
          </MovieDetailsPageStyled>
        ) : (
          <h2 className="notFound">Page not found </h2>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
