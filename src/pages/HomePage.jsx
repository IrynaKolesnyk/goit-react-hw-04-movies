import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePageStyled from "../styles/HomePageStyled";
import { fetchTrendingMovies } from "../services/Api";

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    await fetchTrendingMovies()
      .then((results) => this.setState({ trendingMovies: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { trendingMovies } = this.state;
    console.log(this.state.trendingMovies);
    return (
      <div className="container">
        <HomePageStyled>
          <h2 className="title">Trending today</h2>
          <ul className="homeList">
            {trendingMovies.length &&
              trendingMovies.map((movie) => (
                <li className="homeItem" key={movie.id}>
                  <Link to="/" className="homeLink">
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
      </div>
    );
  }
}

export default HomePage;
