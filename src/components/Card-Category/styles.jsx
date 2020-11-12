import styled from "styled-components";

export const CardCategoryStyled = styled.div`
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: 0.5px solid transparent;
  :hover {
    border: 0.5px solid blue;
  }
  figure {
    margin: 0;
  }
  figure img {
    width: 100%;
  }
  
  header {
    padding: 0 5px 0 5px;
  }
  header h2, header p {
    margin: 0;
  }
  header h2 {
    font-size: 22px;
  }

  
  // media queries
  @media screen and (min-width: 425px) {
    font-size: 18px;
  }
  @media screen and (min-width: 780px) {
    header {
      padding: 0 15px 0 15px;
    }
    header h2 {
      font-size: 28px;
    }
    header p {
      font-size: 22px;
    }
  }
`;
