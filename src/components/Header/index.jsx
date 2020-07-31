import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";
import InputSearch from "components/Input-Search";

function Header({ initialKeyword }) {
  return (
    <HeaderStyled>
      <header className="header">
        <Link to="/">Anime Finder</Link>
        <InputSearch initialKeyword={initialKeyword} />
      </header>
    </HeaderStyled>
  );
}

export default Header;
