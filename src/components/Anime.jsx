import React from "react";
import { useHistory } from "react-router-dom";

function Anime({ title, image, type, score, id }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/anime/${id}`);
  }
  return (
    <div onClick={handleClick}>
      <img
        loading="lazy"
        src={image}
        alt={title}
        height="320px"
        width="225px"
      />
      <div className="details">
        <h2>Name: {title}</h2>
        <p>
          <strong>Type: </strong>
          {type}
        </p>
        <p>
          <strong>Score: </strong>
          {score}
        </p>
      </div>
    </div>
  );
}

export default Anime;
