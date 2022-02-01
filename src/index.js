import App from "./App";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/common/spinner/spinner.components";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>,

  document.getElementById("root")
);
