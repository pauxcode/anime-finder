import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
  .content {
    height: 80px;
    display flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 14px;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Finder Anime</h1>
          <div className="dark-mode">
            <p>
              <span className="moon">
                <i className="fas fa-moon"></i>
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
