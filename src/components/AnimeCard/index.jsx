import React from "react";

import { useHistory } from "react-router-dom";

import { AnimeCardStyled } from "./styles";

function Anime({
  id,
  rank,
  title,
  image,
  type,
  episodes,
  members,
  score,
  seccion,
  r18,
  rated,
}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/anime/${id}`);
  }

  if (seccion === "top-animes") {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img loading="lazy" alt={title} src={image} width="128" height="209" />
        <div className="information">
          <h2>{title}</h2>
          <p>Rank: {rank}</p>
          <p>
            {type === "TV" ? <i className="fas fa-tv"></i> : type} ({episodes})
          </p>
          <p>
            <i className="fas fa-star"></i> {score}
            {"  "}
            <i className="fas fa-child"></i> {members}
          </p>
        </div>
      </AnimeCardStyled>
    );
  } else {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img loading="lazy" alt={title} src={image} height="209" width="128" />
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
