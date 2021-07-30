import React, { Component } from "react";
import { fetchMovieCast } from "../services/Api";
import CastStyled from "../styles/CastStyled";
import defaultImg from "../images/unnamed.jpg";
import AppLoader from "../component/AppLoader";

class Cast extends Component {
  state = {
    castData: {},
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    this.setState({ isLoading: true });
    await fetchMovieCast(id)
      .then((results) => this.setState({ castData: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { castData, isLoading } = this.state;
    return (
      <>
        <CastStyled>
          {castData.id ? (
            <ul className="castList">
              {castData.cast.map(({ id, profile_path, name }) => (
                <li className="castItem" key={id}>
                  <img
                    className="castImg"
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                  />
                  <h2 className="castTitle">{name}</h2>
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="notFound">Page not found </h2>
          )}
        </CastStyled>
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default Cast;
