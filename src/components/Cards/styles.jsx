import styled from "styled-components";

export const AnimeCardStyled = styled.div`
  display: grid;
  grid-template-rows: 209px auto;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.15);
  background-color: var(--white);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    // width: 320px;
    // height: 225px;
  }

  header {
    display: grid;
    grid-template-rows: 45px 30px 30px 30px;
  }
  header h2, header p {
    margin: 0;
  }
  header h2 {
    font-size: 16px;
    overflow: auto;
    border-bottom: 1px solid;
  }
  header h2::-webkit-scrollbar {
    width: 3px;
  }
  header h2::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  header h2::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
  header p .fa-star {
    color: yellow;
  }

  // Media queries
  @media screen and (min-width: 1024px) {
    grid-template-rows: 320px auto;
    header {
      padding: 10px;
    }
  }
`;
