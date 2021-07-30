import React, { Component } from "react";

import MoviesList from "../component/moviesList/MoviesList";
import Searchbar from "../component/searchbar/Searchbar";
import { fetchMovieByQuery } from "../services/Api";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    moviesData: [],
  };

  componentDidMount() {}
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
    await fetchMovieByQuery(searchQuery)
      .then((response) =>
        this.setState({
          moviesData: response,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    const { moviesData } = this.state;
    console.log(this.state.moviesData);
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {moviesData.length > 0 && <MoviesList moviesData={moviesData} />}
      </div>
    );
  }
}

export default MoviesPage;

//<button type="button" onClick={()=> history.pushState(location.state.from)}>Go back</button>
// search: `query=${searchQuery}`,
//  { search: searchQuery;}

// const id = this.props.match.params.id || "";
