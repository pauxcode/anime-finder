import React from "react";
import { CardCategoryStyled } from "./styles";
import { useHistory } from "react-router-dom";

import imgseccion from "images/seccion.jpg";

function CardCategory({ title, description, link }) {
  const history = useHistory();
  function handleClick() {
    history.push(`${link}`);
  }
  return (
    <CardCategoryStyled onClick={handleClick}>
      <div className="image">
        <img
          src={imgseccion}
          alt="anime category"
          lazy="loading"
          width="248px"
          height="250px"
        />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardCategoryStyled>
  );
}

export default CardCategory;
