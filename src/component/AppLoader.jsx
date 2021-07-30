import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class AppLoader extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        className="loader"
        timeout={2000} //3 secs
      />
    );
  }
}
