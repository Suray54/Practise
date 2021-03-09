import React, { Component } from "react";

import "./footer.styles.scss";
import { SOCIAL } from "./../../constant/social-constant.js";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__end mb-4">
          <p>
            Copyright &#169; all rights reserved | designed & developed by
            <a
              href="https://suray54.github.io/Rezume/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Suranjan rai
            </a>
          </p>
        </div>
        <div className="footer__social">
          {SOCIAL.map((social, index) => (
            <a
              target="_blank"
              key={index}
              rel="noopener noreferrer nofollow"
              href={social.link}
              className="footer__social-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Footer;
