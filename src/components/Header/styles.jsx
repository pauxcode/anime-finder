import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-sizing: initial;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: var(--white);
  margin-bottom: 10px;
  padding: 10px 0;

  h1 {
    font-size: 22px;
    font-weight: bold;
  }
  h1 a {
    color: royalblue;
    text-decoration: none;
  }
  h1 a:hover {
    text-decoration: underline;
  }

  nav {
    width: 50%;
  }
  nav input {
    width: 100%;
  }
  
  box-shadow: 0 2px rgba(0, 0, 0, 0.15);

  // Media queries
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 25px;
    }
    nav {
      width: 36%;
    }
  }
`;