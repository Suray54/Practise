import React from "react";

import "./layouts.styles.scss";

import Navigation from "./nav/nav.components";
import Footer from "./footer/footer.components";

const Layouts = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="space">{children}</div>
      {/* space because nav is fixed top */}
      <Footer />
    </>
  );
};

export default Layouts;
