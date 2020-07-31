import React from "react";
import { useHistory } from "react-router-dom";
import { AnimeCardStyled } from "./styles";

function Anime({
  id,
  image_url,
  title,
  type,
  score,
  rank,
  episodes,
  members,
  r18,
  rated,
}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/anime/${id}`);
  }
  if (type === undefined) {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img
          loading="lazy"
          alt={title}
          src={image_url}
          width="128"
          height="209"
        />
        <div className="information">
          <h2>{title}</h2>
          <p>Rank: {rank}</p>
          <p>
            {type}({episodes})
          </p>
          <p>Score: {score}</p>
          <p>{members}</p>
        </div>
      </AnimeCardStyled>
    );
  } else {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img
          loading="lazy"
          alt={title}
          src={image_url}
          height="209"
          width="128"
        />
        <div className="information">
          <h2>{title}</h2>
          <p>
            {type}
            {episodes != null ? ` (${episodes})` : ""}
          </p>
          <p>Score: {score}</p>
          <p>{members}</p>
          <p>{r18 ? "+18" : ""}</p>
          <p>Rated: {rated}</p>
        </div>
      </AnimeCardStyled>
    );
  }
}

export default Anime;
