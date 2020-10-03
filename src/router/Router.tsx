import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { routerConfig } from "./routerConfig";

export const Router: React.FC = () => {
  return (
    <Switch>
      {Object.values(routerConfig.routes).map((route) => (
        <Route key={route.path} path={route.path} component={route.pageComponent} />
      ))}
      <Route exact path="/">
        <Redirect to={routerConfig.routes.categories.path} />
      </Route>
    </Switch>
  );
};
