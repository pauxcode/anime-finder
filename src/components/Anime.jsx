import React from "react";

function Anime({ image_url, title, type, score }) {
  return (
    <div>
      <img alt={title} src={image_url} />
      <h2>{title}</h2>
      <span>{type}</span>
      <span>{score}</span>
    </div>
  );
}

export default Anime;
