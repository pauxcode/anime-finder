import React from "react";
import { useHistory } from "react-router-dom";

import { AnimeCardStyled } from "./styles";

function SeasonAnime({
  id,
  title,
  image,
  type,
  airing_start,
  episodes,
  members,
  score,
  r18,
}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/details/anime/${id}`);
  }
  return (
    <AnimeCardStyled onClick={handleClick}>
      <img loading="lazy" alt={title} src={image} height="209" width="128" />
      <div className="information">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <p>
          {airing_start ? airing_start.replace(/[-:+]/g, " ").slice(0, 10) : ""}
        </p>
        <p>
          {type === "TV" ? (
            <i className="fas fa-tv"></i>
          ) : type === "Movie" ? (
            <i className="fas fa-film"></i>
          ) : (
                type
              )}{" "}
          {episodes === null ? "" : `(${episodes})`}
        </p>
        <p>
          {score === null ? (
            ""
          ) : (
              <>
                <i className="fas fa-star"></i>
                {score}
              </>
            )}
          {"  "}
          {members === 0 ? (
            ""
          ) : (
              <>
                <i className="fas fa-child"></i> {members}
              </>
            )}
        </p>
        <p>{r18 ? "+18" : ""}</p>
      </div>
    </AnimeCardStyled>
  );
}

export default SeasonAnime;
