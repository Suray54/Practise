import React from "react";
import { Switch, Route } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./ScrollToTop";
import Homepage from "./pages/homepage/homepage.components";
import PageNotfound from "./pages/404/404.components";

function App() {
  return (
    <>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={PageNotfound} />
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default App;
