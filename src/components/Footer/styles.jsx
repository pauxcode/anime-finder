import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: #53354a;
  display: flex;
  width: 100%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: var(--white);
  p {
    margin-top: 15px;
  }
  p a {
    color: var(--white);
    text-decoration: none;
  }
  p a:hover {
    text-decoration: underline;
  }
  
  // Media queries
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 25px;
    p {
      margin: 0;
      margin-bottom: 15px;
    }
  }
`;