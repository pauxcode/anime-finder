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
    justify-content: space-around;
    display: flex;
    span {
      padding: 5px;
      font-size: 15px;
      width: 95px;
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
    .genres > span {
      width: 170px;
    }
  }
  @media (min-width: 700px) {
    .iframe {
      height: 370px;
    }
  }
`;

export const MangaDetailsStyled = styled.div`
  background: var(--background);
  padding: 0 20px;
  main { background: var(--white); }
  .image_cover {
    display: flex;
    justify-content: center;
  }
  .status {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .status > p {
    width: 50%;
  }
  .status > p:nth-child(5) {
      width: 100%;
    }
  .synopsis {
    background: var(--white);
  }
  .genres {
    display: flex;
    flex-wrap: wrap;
  }
  .genres > span {
    padding: 5px;
    font-size: 15px;
    width: 48%;
    margin: 0 10px 10px 0;
    text-align: center;
    border: 0.5px solid var(--black);
    border-radius: 5px;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  }
  .genres > span:hover {
    cursor: pointer;
    border: 1px solid darkred;
  }
  .genres > span:nth-child(2n) {
    margin: 0 0 10px 0;
  }

  @media (min-width: 425px) {
    .genres > span {
      width: 30%;
    }
    .genres > span:nth-child(2n) {
      margin: 0 10px 10px 0;
    }
    .genres > span:nth-child(3n) {
      margin: 0 0 10px 0;
    }
  }
  @media (min-width: 700px) {
    .genres > span {
      width: 23%;
    }
    .status > p {
      width: 25%;
    }
    .genres > span:nth-child(3n) {
      margin: 0 10px 10px 0;
    }
    .genres > span:nth-child(4n) {
      margin: 0 0 10px 0;
    }
  }
  @media (min-width: 1024px) {
    .genres > span {
      width: 19%;
    }
    .genres > span:nth-child(4n) {
      margin: 0 10px 10px 0;
    }
    .genres > span:nth-child(5n) {
      margin: 0 0 10px 0;
    }
  }
`;
