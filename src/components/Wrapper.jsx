import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1312px;
  margin: auto;
  padding: 0rem 1rem 2rem;

  /* select, header {
    display: grid;
  grid-template-columns: repeat(auto-fill, 135px);
  gap: 15px;
  justify-content: center;
  }

  // Media Queries
  @media screen and (min-width: 1024px) {
    select, header {
    grid-template-columns: repeat(auto-fill, 225px);
    gap: 30px;
    }
  } */
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;