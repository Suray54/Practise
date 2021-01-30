import React from "react";
import { Switch, Route } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/homepage/homepage.components";
import PageNotfound from "./pages/404/404.components";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={PageNotfound} />
    </Switch>
  );
}

export default App;
