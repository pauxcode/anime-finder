import styled from "styled-components";

export const ListOfAnimesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 135px);
  gap: 15px;
  justify-content: center;

  select {
    padding: 3px;
  }
  span {
    grid-column: 2 / -1;
  }

  // Media Queries
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 225px);
    gap: 30px;
  }
`;
