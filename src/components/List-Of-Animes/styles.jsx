import styled from "styled-components";

export const ListOfAnimesStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
