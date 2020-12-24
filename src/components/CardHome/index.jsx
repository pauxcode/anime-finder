import React from "react";
import { useHistory } from "react-router-dom";

import { CardHomeStyled } from "./styles";
import imgSeccion from "images/home_image.jpg";

function CardHome({ title, description, link }) {
  const history = useHistory();
  function handleClick() {
    history.push(`${link}`);
  }
  return (
    <CardHomeStyled onClick={handleClick}>
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
    </CardHomeStyled>
  );
}

export default CardHome;