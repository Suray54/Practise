import React, { Component } from "react";

import "./footer.styles.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__end">
          <div className="container">
            <p>
              Copyright &#169; all rights reserved | designed & developed by
              <a href="https://suray54.github.io/Rezume/">Suranjan rai</a>
            </p>
          </div>
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
