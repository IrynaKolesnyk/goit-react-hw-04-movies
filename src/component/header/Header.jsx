import React, { Component } from "react";
import headerRoutes from "../../routes/headerRoutes";
import Navigetion from "../navigation/Navigetion";
import HeaderStyled from "./HeaderStyled";

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Navigetion routes={headerRoutes} />
      </HeaderStyled>
    );
  }
}

export default Header;
