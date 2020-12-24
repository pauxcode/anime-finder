import React from "react";

import { FooterStyled } from "./styles";

function Footer() {
  return (
    <FooterStyled>
      <p>
        Made by @pauxcode with love
        <span role="img" aria-label="heart emoji" >❤️</span>
      </p>
      <p>
        <a href="https://twitter.com/pauxcode" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
          Twitter
        </a>
      </p>
      <p>
        <a href="https://github.com/pauxcode" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          Github
        </a>
      </p>
      <p>
        <a href="http://www.linkedin.com/in/paulhaleman" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          Linkedin
        </a>
      </p>
    </FooterStyled>
  );
}

export default Footer;