import React from "react";

import { ButtonBackStyled } from "./styles";
function ButtonBack({ history }) {
  function handleClick() {
    history.goBack();
  }
  return <ButtonBackStyled onClick={handleClick}>Back</ButtonBackStyled>;
}

export default ButtonBack;