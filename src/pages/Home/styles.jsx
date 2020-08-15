import styled from "styled-components";

export const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: 1fr 1fr;
  justify-content: space-around;
  row-gap: 20px;
`;

export const PromptStyled = styled.div`
  .prompt {
    background-image: url("./static/media/favicon-96x96.50761cf8.png");
    background-position-x: 1rem;
    background-position-y: 1.5rem;
    background-repeat: no-repeat;
    background-size: auto 40%;
    background-color: #ffffff;
    box-shadow: 0 20px 40px 0 rgba(91, 107, 174, 0.15);
    padding: 1.5rem 1rem 0.5rem 5rem;
    position: fixed;
    transition: all 0.5s ease-in-out;
    width: 100vw;
    z-index: 9;
    border-top: 1px solid #dee2e6;
  }

  .prompt.show {
    transition-delay: 3s;
    bottom: 0;
    opacity: 1;
  }

  .prompt.hide {
    bottom: -100%;
    opacity: 0;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .btn {
    width: auto;
    border: none;
    background-color: transparent;
    font-family: Arial;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .btn.btn-add {
    color: #007bff;
  }
  .btn.btn-cancel {
    color: #6c757d;
  }
  h3 {
    margin: 0;
  }
`;
