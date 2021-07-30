import React, { Component } from "react";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <Main />
      </section>
    );
  }
}

export default App;
