import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePageStyled from "../styles/HomePageStyled";
import { fetchTrendingMovies } from "../services/Api";
import AppLoader from "../component/AppLoader";

class HomePage extends Component {
  state = {
    trendingMovies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await fetchTrendingMovies()
      .then((results) => this.setState({ trendingMovies: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { trendingMovies, isLoading } = this.state;
    return (
      <>
        <HomePageStyled>
          <h2 className="title">Trending today</h2>
          <ul className="homeList">
            {trendingMovies.length &&
              trendingMovies.map((movie) => (
                <li className="homeItem" key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: this.props.location.pathname },
                    }}
                    className="homeLink"
                  >
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w300" + movie.poster_path
                      }
                      alt={movie.title}
                      className="homeImg"
                    />
                    <h2 className="movieTitle">{movie.title}</h2>
                  </Link>
                </li>
              ))}
          </ul>
        </HomePageStyled>
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default HomePage;
