import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";
import InputSearch from "components/Input-Search";

function Header({ initialKeyword }) {
  return (
    <HeaderStyled>
      <header className="header">
        <Link to="/" className="link-home">
          Anime Finder
        </Link>
        <div className="input">
          <InputSearch initialKeyword={initialKeyword} />
        </div>
      </header>
    </HeaderStyled>
  );
}

export default Header;
