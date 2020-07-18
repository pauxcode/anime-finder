import styled from "styled-components";

export const CardCategoryStyled = styled.div`
  background: var(--white);
  display: flex;
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  align-items: center;

  .image {
    width: 49%;
    img {
      width: 100%;
    }
  }
  .details {
    width: 49%;
  }
`;
