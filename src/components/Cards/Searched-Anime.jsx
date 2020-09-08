import React from "react";
import { useHistory } from "react-router-dom";

import { AnimeCardStyled } from "./styles";

function SearchedAnime({
  id,
  image,
  title,
  type,
  episodes,
  score,
  members,
  rated,
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
}

export default SearchedAnime;
