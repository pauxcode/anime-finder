import styled from "styled-components";

export const CardCategoryStyled = styled.div`
  background: var(--white);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    img {
      height: 160px
    }
  }
`;
