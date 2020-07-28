import styled from "styled-components";

export const AnimeDetailsStyled = styled.div`
  background: var(--background);
  padding: 0 20px;
  .iframe {
    width: 100%;
    height: 185px;
  }
  .star {
    width: 20px;
  }
  .synopsis {
    background: var(--white);
  }
  .genres {
    display: grid;
    grid-template-columns: repeat(auto-fill, 106px);
    row-gap: 10px;
    justify-items: center;
    span {
      padding: 5px;
      font-size: 15px;
      width: 91px;
      text-align: center;
      background: var(--white);
      border-radius: 5px;
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    }
  }
`;
