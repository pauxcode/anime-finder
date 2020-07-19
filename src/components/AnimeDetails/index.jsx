import React from "react";

function AnimeDetails({ image_url, title, type, score, rank }) {
  return (
    <div>
      <img alt={title} src={image_url} />
      <h2>{title}</h2>
      <p>Rank: {rank}</p>
      <p>Score: {score}</p>
      <p>Type: {type}</p>
    </div>
  );
}

export default AnimeDetails;
