import React, { Component, lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { fetchMovieDetails } from "../services/Api";
import MovieDetailsPageStyled from "../styles/MovieDetailsPageStyled";
import Loader from "react-loader-spinner";
import AppLoader from "../component/AppLoader";

const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

class MovieDetailsPage extends Component {
  state = {
    moviesDetails: {},
    from: "",
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    this.setState({ isLoading: true });
    await fetchMovieDetails(id)
      .then((results) =>
        this.setState({
          moviesDetails: results,
          from: this.props.location.state.from,
        })
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { moviesDetails, isLoading } = this.state;
    const id = this.props.match.params.id || "";

    return (
      <div className="container">
        {moviesDetails.id && (
          <MovieDetailsPageStyled>
            <button
              className="goBackBtn"
              type="button"
              onClick={() => this.props.history.push(this.state.from)}
            >
              Go back
            </button>
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
              <Suspense
                fallback={
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    className="loader"
                  />
                }
              ></Suspense>
              <Switch>
                <Route path="/movies/:id/reviews" exact component={Reviews} />
                <Route path="/movies/:id/cast" exact component={Cast} />
              </Switch>
              <Suspense />
            </div>
          </MovieDetailsPageStyled>
        )}
        {isLoading && <AppLoader />}
      </div>
    );
  }
}

export default MovieDetailsPage;
