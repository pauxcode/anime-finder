import styled from "styled-components";

export const AnimeCardStyled = styled.div`
  cursor: pointer;
  background: var(--white);
  width: 150px;
  margin-bottom: 10px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  border: 1px solid transparent;
  transition: 0.3s border;
  :hover {
    border: 1px solid darkred;
  }
  img {
    width: 100%;
    height: 209px;
    object-fit: cover;
    border-bottom: 3px solid #00ff89;
  }
  .information {
    h2 {
      font-size: 15px;
    }
  }
  .title {
    /* min-height: 30px;
    max-height: 60px; */
    height: 62px;
    overflow: hidden;
  }
  i.fas,
  i.fab {
    border: 1px solid black;
  }
  .fa-star {
    color: yellow;
  }
  @media (min-width: 1024px) {
    width: 200px;
    img {
      height: 285px;
    }
  }
`;
