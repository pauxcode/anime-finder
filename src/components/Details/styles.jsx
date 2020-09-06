import styled from "styled-components";

export const AnimeDetailsStyled = styled.div`
  background: var(--background);
  .image_cover {
    display: flex;
    justify-content: center;
  }
  padding: 0 20px;
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
      border: 0.5px solid var(--black);
      border-radius: 5px;
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    }
    span:hover {
      cursor: pointer;
      border: 1px solid darkred;
    }
  }

  @media (min-width: 700px) {
    .iframe {
      height: 370px;
    }
  }
`;
