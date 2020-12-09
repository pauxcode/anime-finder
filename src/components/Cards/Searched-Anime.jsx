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
      <header className="information">
        <h2>{title}</h2>
        <p>
          {type === "TV" ? <i className="fas fa-tv"></i>
            : type === "Movie" ? <i className="fas fa-film"></i>
              : type
          }
          {episodes === null ? ` (?)` : ` (${episodes})`}
        </p>
        <p>
          {score === null ?
            <>
              <i className="fas fa-star"></i> ?
            </>
            :
            <>
              <i className="fas fa-star"></i> {score}
            </>
          }
          {"  "}
          {members === 0 ?
            <>
              <i className="fas fa-child"></i> ?
            </>
            :
            <>
              <i className="fas fa-child"></i> {members}
            </>
          }
        </p>
        <p>Rated: {rated}</p>
      </header>
    </AnimeCardStyled>
  );
}

export default SearchedAnime;
