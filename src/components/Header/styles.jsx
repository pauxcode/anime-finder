import styled from "styled-components";

export const HeaderStyled = styled.div`
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 45px;
    background: var(--white);

    margin-bottom: 10px;
  }
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
      padding: 0 20px 0 50px;
    }
    .input {
      width: 30%;
    }
  }
  @media (min-width: 1440px) {
    .header {
      padding: 0 20px 0 70px;
    }
  }
`;
