import React from "react";
import { Link } from "react-router-dom";

function Anime({ id, image_url, title, type, score }) {
  return (
    <div>
      <Link to={`/anime/${id}`}>
        <img alt={title} src={image_url} />
        <h2>{title}</h2>
        <span>{type}</span>
        <span>{score}</span>
      </Link>
    </div>
  );
}

export default Anime;
