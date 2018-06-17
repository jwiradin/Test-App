import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Notes from "./containers/Notes";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <Route
      path="/"
      exact
      component={Home}
      props={childProps}
    />
    <Route
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <Route
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <Route
      path="/notes/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <Route
      path="/notes/:id"
      exact
      component={Notes}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
;