import React from "react";
import { CardCategoryStyled } from "./styles";
import { useHistory } from "react-router-dom";

import imgSeccion from "images/seccion.jpg";

function CardCategory({ title, description, link }) {
  const history = useHistory();
  function handleClick() {
    history.push(`${link}`);
  }
  return (
    <CardCategoryStyled onClick={handleClick}>
      <figure className="image">
        <img
          src={imgSeccion}
          alt="anime category"
          lazy="loading"
        />
      </figure>
      <header className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
    </CardCategoryStyled>
  );
}

export default CardCategory;
