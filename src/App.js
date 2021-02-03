import React from "react";
import { Switch, Route } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./ScrollToTop";
import Layouts from "./layouts/layouts.components";
import PageNotfound from "./pages/404/404.components";
import Homepage from "./pages/homepage/homepage.components";

function App() {
  return (
    <>
      <ScrollToTop>
        <Layouts>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={PageNotfound} />
          </Switch>
        </Layouts>
      </ScrollToTop>
    </>
  );
}

export default App;
