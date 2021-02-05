import React from "react";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";
import { LINK } from "../../constant/link-constant";

const Homepage = () => {
  return (
    <>
      <div className="homepage ">
        <div className="row flex-center">
          {LINK.map((link, index) => (
            <div key={index} className="col-lg-3 col-md-6  no-padding">
              <Link className="homepage__link flex-center" to={link.to}>
                <div> {link.linkname}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
