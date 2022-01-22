import { Link } from "react-router-dom";
import React, { Component, useState } from "react";

import { LINK } from "../../constant/link-constant.js";

// import "./nav.js";
import "./nav.styles.scss";
import logo from "./../../assets/logowhite.ico";
import { LINK } from "../../constant/link-constant";

export class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md fixed-top d-none d-sm-block">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav  ml-auto">
                {LINK.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link" to={link.to}>
                      {link.linkname}
                    </Link>
                  </li>
                ))}
                {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pokedex">
                  Pokedex
                </Link>
              </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <DrawerMenu />
      </>
    );
  }
}

export default Navigation;

const DrawerMenu = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top d-block d-sm-none">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button onClick={showSidebar} className="burger-button">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
      <div className={sidebar ? "drawer-menu active" : "drawer-menu"}>
        <ul>
          {LINK.map((link, index) => (
            <li key={index} className="drawer-menu_item" onClick={showSidebar}>
              <Link className="drawer-menu_link" to={link.to}>
                {link.linkname}
              </Link>
            </li>
          ))}
        </ul>
        <i
          className={
            sidebar
              ? "spin active fa fa-times-circle"
              : "spin fa fa-times-circle"
          }
          onClick={showSidebar}
        />
      </div>
    </>
  );
};
