import React from "react";
import { AnimeDetailsStyled } from "./styles";

function AnimeDetails({
  trailer_url,
  title,
  score,
  scored_by,
  type,
  synopsis,
  genres = [],
  opening_themes = [],
  ending_themes = [],
}) {
  return (
    <AnimeDetailsStyled>
      <iframe
        title={title}
        className="iframe"
        src={trailer_url}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
      <div className="score">
        <img
          src="https://img.icons8.com/fluent/48/000000/star.png"
          className="star"
          alt="star"
        />
        {score}. Scored by: {scored_by}
      </div>
      <p>Type: {type}</p>
      <h3>Description: </h3>
      <p className="synopsis">{synopsis}</p>
      <h3>Genres: </h3>
      <p className="genres">
        {genres.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </p>
      <h3>Openings:</h3>
      <ul>
        {opening_themes.map((item) => (
          <li className="themes" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <h3>Endings:</h3>
      <ul>
        {ending_themes.map((item) => (
          <li className="themes" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </AnimeDetailsStyled>
  );
}

export default AnimeDetails;