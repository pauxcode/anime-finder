import styled from "styled-components";

export const FooterStyled = styled.div`
  background: #53354a;
  display: flex;
  width: 100%;
  height: 50vh;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: var(--white);
  p a {
    color: var(--white);
    text-decoration: none;
  }
  p a:hover {
    text-decoration: underline;
  }


  // Media queries
  @media screen and (min-width: 560px) {
    font-size: 20px;
  }
  @media screen and (min-width: 780px) {
    font-size: 25px;
  }
  @media screen and (min-width: 975px) {
    font-size: 35px;
    p {
      margin: 0;
      margin-bottom: 15px;
    }
  }
`;
