import React from "react";
import { useHistory } from "react-router-dom";

function Anime({ id, image_url, title, type, score, rank }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/anime/${id}`);
  }
  if (type === undefined) {
    return (
      <div onClick={handleClick}>
        {/* <Link to={`/anime/${id}`}> */}
        <img alt={title} src={image_url} />
        <h2>{title}</h2>
        <p>Rank: {rank}</p>
        <p>Score: {score}</p>
      </div>
    );
  } else {
    return (
      <div onClick={handleClick}>
        <img alt={title} src={image_url} />
        <h2>{title}</h2>
        <p>Type: {type}</p>
        <p>Score: {score}</p>
      </div>
    );
  }
}

export default Anime;
