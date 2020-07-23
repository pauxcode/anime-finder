import styled from "styled-components";

export const AnimeDetailsStyled = styled.div`
  background: var(--background);
  .iframe {
    width: 100%;
  }
  .synopsis {
    background: var(--white);
  }
  .genres {
    display: grid;
    grid-template-columns: repeat(auto-fill, 114px);
    row-gap: 10px;
    justify-items: center;
    span {
      padding: 5px;
      width: 91px;
      text-align: center;
      background: var(--white);
      border-radius: 5px;
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    }
  }
`;
