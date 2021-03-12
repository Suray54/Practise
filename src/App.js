import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import PageNotfound from "./components/404/404.components";
import Dashboard from "./components/dashboard";
import AddProject from "./components/Project/add-project";
import Header from "./components/layouts/header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/addproject" component={AddProject} />
        <Route component={PageNotfound} />
      </Switch>
    </>
  );
}

export default App;
