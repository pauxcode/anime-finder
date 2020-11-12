import styled from "styled-components";

export const InputSearchStyled = styled.div`
  input {
    width: 100%;
    text-align: center;
    padding: 4px 0px;
    border-radius: 30px;
    border: none;
    border: 1.3px solid #f2f2f2;
    outline: 0;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.15);
  }

  // Media queries
  @media screen and (min-width: 780px) {
    input {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 975px) {
    input {
      font-size: 22px;
    }
  }
`;
