import styled from "styled-components";

export const ListOfAnimesStyled = styled.div`
  display: grid;
  /* grid-template-columns: minmax(148px, 225px) minmax(148px, 225px); */
  /* grid-template-columns: repeat(auto-fill, minmax(148px, 148px)); */
  grid-template-columns: repeat(auto-fit, minmax(148px, 172px));
  justify-content: center;
  column-gap: 15px;
  row-gap: 10px;
  /* @media (min-width: 740px) {
    grid-template-columns: minmax(148px, 225px) minmax(148px, 225px) minmax(
        148px,
        225px
      );
  } */
`;
