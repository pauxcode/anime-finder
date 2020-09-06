import React from "react";
import { useHistory } from "react-router-dom";

import { AnimeCardStyled } from "./styles";

function TopManga({ id, rank, title, type, volumes, members, score, image }) {
  const history = useHistory();

  function handleClick() {
    history.push(`/manga/${id}`);
  }
  return (
    <AnimeCardStyled onClick={handleClick}>
      <img loading="lazy" alt={title} src={image} width="128" height="209" />
      <div className="information">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <p>Rank: {rank}</p>
        <p>
          {type}{" "}
          {volumes === null ?
            " "
            :
            `(${volumes})`
          }
        </p>
        <p>
          <i className="fas fa-star"></i> {score}
          {"  "}
          <i className="fas fa-child"></i> {members}
        </p>
      </div>
    </AnimeCardStyled>
  );
}

export default TopManga;
