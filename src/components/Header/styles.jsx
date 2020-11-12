import styled from "styled-components";

export const HeaderStyled = styled.div`
  .header {
    box-shadow: 0 2px rgba(0, 0, 0, 0.15);
  }
  .header nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 45px;
    background: var(--white);
    margin-bottom: 10px;
  }
  nav a {
    color: royalblue;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
  nav a:hover {
    text-decoration: underline;
  }
  .input {
    width: 50%;
  }


  // Media queries
  @media screen and (min-width: 560px) {
    nav a {
      font-size: 22px;
    }
  }
  @media screen and (min-width: 780px) {
    nav a {
      font-size: 25px;
    }
    .input {
      width: 36%;
    }
  }
  @media screen and (min-width: 975px) {
    .header nav {
      height: 60px;
    }
  }
`;
