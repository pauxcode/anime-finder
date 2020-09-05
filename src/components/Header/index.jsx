import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";
import InputSearch from "components/Input-Search";

function Header() {
  return (
    <HeaderStyled>
      <header className="header">
        <nav>
          <Link to="/" className="link-home">
            Anime Finder
          </Link>
          <div className="input">
            <InputSearch initialKeyword="" />
          </div>
        </nav>
      </header>
    </HeaderStyled>
  );
}

export default Header;
