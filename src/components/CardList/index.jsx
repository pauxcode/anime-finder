import React from "react";
import { useHistory } from "react-router-dom";

import { CardStyled } from "./styles";

function TopAnime({
  id,
  typeG,
  image,
  title,
  rank,
  airing_start,
  type,
  episodes,
  volumes,
  members,
  score,
  r18,
  rated,
}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/details/${typeG}/${id}`);
  }
  return (
    <CardStyled onClick={handleClick}>
      <img loading="lazy" alt={title} src={image} width="128" height="209" />
      <header className="information">
        <h2>{title}</h2>
        <>
          {rank != null ? <p>Rank: {rank}</p> : <></>}
          {airing_start ? <p>{airing_start.replace(/[-:+]/g, "-").slice(0, 10)}</p> : <></>}
        </>
        <p>
          {type === "TV" ? <i className="fas fa-tv"></i>
            : type === "Movie" ? <i className="fas fa-film"></i>
              : type
          }
          {episodes || volumes != null ? ` (${episodes || volumes})` : ` (?)`}
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
        <>
          {r18 ? <p>+18</p> : <></>}
          {rated ? <p>Rated: {rated}</p> : <></>}
        </>
      </header>
    </CardStyled>
  );
}

export default TopAnime;