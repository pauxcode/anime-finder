import styled from "styled-components";

export const ListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
  select {
    padding: 3px;
  }
  span {
    grid-column: 2 / -1;
  }
  // Media Queries
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(141px, 1fr));
    gap: 30px;
  }
`;