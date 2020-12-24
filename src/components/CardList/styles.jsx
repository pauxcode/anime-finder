import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
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
    grid-template-rows: 40px repeat(3, 25px);
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
    header {
      padding: 5px;
      grid-template-rows: 45px repeat(3, 25px);
    }
  }
`;