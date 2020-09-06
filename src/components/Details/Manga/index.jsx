import React from "react";
import { AnimeDetailsStyled } from "../styles";

function MangaDetails({
  title,
  status,
  image_url,
  type,
  volumes,
  chapters,
  score,
  scored_by,
  synopsis,
  background,
  genres = [],
  authors = [],
}) {
  return (
    <AnimeDetailsStyled>
      <div className="image_cover" >
        <img src={image_url} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="score">
        <img
          src="https://img.icons8.com/fluent/48/000000/star.png"
          className="star"
          alt="star"
        />
        {score}. Scored by: {scored_by}
      </div>
      <div>
        <p>Type: {type}</p>
        <p>Status: {status}</p>
        <p>Volumes: {volumes}</p>
        <p>Chapters: {chapters}</p>
      </div>
      <h3>Synopsis: </h3>
      <p className="synopsis">{synopsis}</p>
      <h3>Background</h3>
      <p>{background}</p>
      <h3>Genres: </h3>
      <p className="genres">
        {genres.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </p>
      <h3>Authors:</h3>
      <ul>
        {authors.map((item) => (
          <li className="autor" key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </AnimeDetailsStyled>
  );
}

export default MangaDetails;
