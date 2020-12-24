import styled from "styled-components";

export const CardHomeStyled = styled.div`
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  figure img {
    width: 100%;
    height: 100%;
    max-height: 200px;
  }
  
  header {
    padding: 0 5px;
    overflow: auto;
  }
  header h2, header p {
    margin: 0;
  }
  header h2 {
    font-size: 22px;
  }
  
  // media queries
  @media screen and (min-width: 768px) {
    header {
      padding: 0 15px;
    }
    header h2 {
      font-size: 28px;
    }
    header p {
      font-size: 22px;
    }
  }
`;