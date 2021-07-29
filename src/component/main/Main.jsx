import React from "react";
import { Switch, Route } from "react-router";
import mainRoutes from "../../routes/mainRoutes";

const Main = () => {
  return (
    <main>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Main;
