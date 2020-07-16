import styled from "styled-components";

export const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  h1 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
