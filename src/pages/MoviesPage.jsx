import React, { Component } from "react";

import MoviesList from "../component/moviesList/MoviesList";
import Searchbar from "../component/searchbar/Searchbar";
import { fetchMovieByQuery } from "../services/Api";
import AppLoader from "../component/AppLoader";
import qs from "query-string";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    moviesData: [],
    isLoading: false,
  };

  componentDidMount() {
    const { location } = this.props;

    const { query } = qs.parse(location.search);

    if (query) {
      this.setState({
        searchQuery: query,
        moviesData: [],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      moviesData: [],
    });
    this.props.history.push({ search: `query=${query}` });
  };

  fetchMovies = async () => {
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });
    await fetchMovieByQuery(searchQuery)
      .then((response) =>
        this.setState({
          moviesData: response,
        })
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { moviesData, isLoading } = this.state;
    console.log(this.state.moviesData);
    return (
      <>
        <div className="moviesWrapper">
          <Searchbar onSubmit={this.onChangeQuery} />
          {moviesData.length > 0 && (
            <MoviesList
              moviesData={moviesData}
              location={this.props.location}
            />
          )}
        </div>
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default MoviesPage;
