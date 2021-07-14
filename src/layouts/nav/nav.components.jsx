import { Link } from "react-router-dom";
import React, { Component } from "react";

// import "./nav.js";
import "./nav.styles.scss";
import logo from "./../../assets/logowhite.ico";
import { LINK } from "../../constant/link-constant";

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
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
    );
  }
}

export default Navigation;
