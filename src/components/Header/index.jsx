import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import { HeaderStyled } from "./styles";

function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <header>
          <div className="main">
            <Link to="/">
              <h1>Finder Anime</h1>
            </Link>
            <div className="dark-mode">
              <p>
                <span className="moon">
                  <i className="fas fa-moon"></i>
                </span>
                Dark Mode
              </p>
            </div>
          </div>
          <div className="links">
            <Link to="/top/anime">
              <h3>Top Anime</h3>
            </Link>
            <Link to="/search/anime">
              <h3>Search (prueba)</h3>
            </Link>
          </div>
        </header>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
