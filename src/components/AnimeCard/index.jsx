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
  airing_start,
}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/anime/${id}`);
  }

  //  MOVIE

  if (seccion === "top-animes") {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img loading="lazy" alt={title} src={image} width="128" height="209" />
        <div className="information">
          <h2>{title}</h2>
          <p>Rank: {rank}</p>
          <p>
            {type === "TV" ? (
              <i className="fas fa-tv"></i>
            ) : type === "Movie" ? (
              <i className="fas fa-film"></i>
            ) : (
              type
            )}{" "}
            ({episodes})
          </p>
          <p>
            <i className="fas fa-star"></i> {score}
            {"  "}
            <i className="fas fa-child"></i> {members}
          </p>
        </div>
      </AnimeCardStyled>
    );
  } else if (seccion === "search") {
    return (
      <AnimeCardStyled onClick={handleClick}>
        <img loading="lazy" alt={title} src={image} height="209" width="128" />
        <div className="information">
          <h2>{title}</h2>
          <p>
            {type === "TV" ? (
              <i className="fas fa-tv"></i>
            ) : type === "Movie" ? (
              <i className="fas fa-film"></i>
            ) : (
              type
            )}{" "}
            ({episodes})
          </p>
          <p>
            <i className="fas fa-star"></i> {score}
            {"  "}
            <i className="fas fa-child"></i> {members}
          </p>
          <p>Rated: {rated}</p>
        </div>
      </AnimeCardStyled>
    );
  } else if (seccion === "season-animes") {
    return (
      <AnimeCardStyled onClick={handleClick}>
        {/* mal_id, title, image_url, type, airing_start, episodes, members, score,
        r18, */}
        <img loading="lazy" alt={title} src={image} height="209" width="128" />
        <div className="information">
          <h2>{title}</h2>
          {/* <p>{airing_start.replace("-", " ")}</p> */}
          <p>
            {airing_start
              ? airing_start.replace(/[-:+]/g, " ").slice(0, 10)
              : ""}
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
}

export default Anime;
