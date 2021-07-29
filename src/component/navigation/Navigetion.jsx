import React from "react";
import { NavLink } from "react-router-dom";

const Navigetion = ({ routes }) => {
  return (
    <nav className="container">
      <ul className="navigationList">
        {routes.map((route) => (
          <li className="navigationItem" key={route.path}>
            <NavLink
              className="navigetionLink"
              activeClassName="activeNavLink"
              to={route.path}
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigetion;

// match.url + match
