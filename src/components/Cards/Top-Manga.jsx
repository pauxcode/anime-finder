import React from "react";
import { useHistory } from "react-router-dom";

import { AnimeCardStyled } from "./styles";

function TopManga({ id, rank, title, type, volumes, members, score, image }) {
  const history = useHistory();

  function handleClick() {
    history.push(`/details/manga/${id}`);
  }
  return (
    <AnimeCardStyled onClick={handleClick}>
      <img loading="lazy" alt={title} src={image} width="128" height="209" />
      <header className="information">
        <h2>{title}</h2>
        <p>Rank: {rank}</p>
        <p>
          {type}{" "}
          {volumes === null ? `(?)` : `(${volumes})`}
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
      </header>
    </AnimeCardStyled>
  );
}

export default TopManga;
