import React from "react";
import { CardCategoryStyled } from "./styles";
import { useHistory } from "react-router-dom";

function CardCategory({ title, description, link }) {
  const history = useHistory();
  function handleClick() {
    history.push(`${link}`);
  }
  return (
    <CardCategoryStyled onClick={handleClick}>
      <div className="image">
        <img
          alt="anime category"
          src="https://finde.latercera.com/wp-content/uploads/2020/06/Amor-de-gata-2-700x450.jpg"
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
