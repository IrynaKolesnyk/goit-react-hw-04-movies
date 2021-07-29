import React, { Component } from "react";
import { fetchMovieCast } from "../services/Api";
import CastStyled from "../styles/CastStyled";

class Cast extends Component {
  state = {
    castData: {},
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await fetchMovieCast(id)
      .then((results) => this.setState({ castData: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { castData } = this.state;
    return (
      <CastStyled>
        {castData.id ? (
          <ul className="castList">
            {castData.cast.map((item) => (
              <li className="castItem" key={item.id}>
                <img
                  className="castImg"
                  src={"https://image.tmdb.org/t/p/w300" + item.profile_path}
                  alt={item.name}
                />
                <h2 className="castTitle">{item.name}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="notFound">Page not found </h2>
        )}
      </CastStyled>
    );
  }
}

export default Cast;
