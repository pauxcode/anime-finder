import React from "react";
import { useHistory } from "react-router-dom";
import { AnimeCardStyled } from "./styles";

function Anime({ id, image_url, title, type, score, rank, episodes, members }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/anime/${id}`);
  }
  if (type === undefined) {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img alt={title} src={image_url} />
        <h2>{title}</h2>
        <p>Rank: {rank}</p>
        <p>Score: {score}</p>
      </AnimeCardStyled>
    );
  } else {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img alt={title} src={image_url} />
        <div className="information">
          <h2>{title}</h2>
          <p>
            {type}({episodes})
          </p>
          <p>Score: {score}</p>
          <p>{members}</p>
        </div>
      </AnimeCardStyled>
    );
  }
}

export default Anime;
