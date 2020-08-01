import styled from "styled-components";

export const AnimeCardStyled = styled.div`
  background: var(--white);
  padding: 0 10px;
  img {
    width: 100%;
    height: 209px;
    border-bottom: 3px solid #00ff89;
  }
  .information {
    h2 {
      font-size: 15px;
    }
  }
  i.fas,
  i.fab {
    border: 1px solid black;
  }
  .fa-star {
    color: yellow;
  }
`;
