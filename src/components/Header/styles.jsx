import styled from "styled-components";

export const HeaderStyled = styled.div`
  border-bottom: 1px solid var(--blanck);
  .header nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 45px;
    background: var(--white);

    margin-bottom: 10px;
  }
  /* nav {
    border: 1px solid red;
    position: sticky;
    top: 0;
  } */
  .input {
    width: 50%;
  }
  @media (min-width: 700px) {
    .input {
      width: 40%;
    }
  }
  @media (min-width: 900px) {
    .header {
      justify-content: space-between;
      box-sizing: border-box;
    }
    .input {
      width: 30%;
    }
  }
`;
