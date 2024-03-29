import React from "react";
import { Switch, Route } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";

import ScrollToTop from "./utils/ScrollToTop";
import Layouts from "./layouts/layouts.components";
import Pokedex from "./pages/pokedex/pokedex.components";
import Homepage from "./pages/homepage/homepage.components";
import GitSearch from "./pages/github/github-search.component";
import PageNotfound from "./components/common/404/404.components";

function App() {
  return (
    <>
      <ScrollToTop>
        <Layouts>
          <Switch>
            <Route path="/" component={Homepage} exact />

            <Route path="/git" component={GitSearch} />
            <Route path="/pokedex" component={Pokedex} exact />

            <Route component={PageNotfound} />
          </Switch>
          <ToastContainer autoClose={3500} />
        </Layouts>
      </ScrollToTop>
    </>
  );
}

export default App;
