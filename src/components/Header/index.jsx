import React from "react";
import { Link } from "react-router-dom";

import { HeaderStyled } from "./styles";

import InputSearch from "components/InputSearch";

function Header({ initialKeyword }) {
  return (
    <HeaderStyled className="header-main">
      <h1>
        <Link to="/" className="link-home">
          Anime Finder
        </Link>
      </h1>
      <nav>
        <InputSearch initialKeyword={initialKeyword} />
      </nav>
    </HeaderStyled>
  );
}

export default Header;