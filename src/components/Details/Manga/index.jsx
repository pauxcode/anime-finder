import React from "react";
import { MangaDetailsStyled } from "../styles";

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
    <MangaDetailsStyled>
      <main>
        <div className="image_cover" >
          <img src={image_url} alt={title} />
        </div>
        <h2>{title}</h2>
        <div className="status" >
          <p><b>Type:</b> {type}</p>
          <p><b>Status:</b> {status}</p>
          <p><b>Volumes:</b> {volumes}</p>
          <p><b>Chapters:</b> {chapters}</p>
          <p>
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              className="star"
              alt="star"
            />
            {score}. (Scored by: {scored_by})
          </p>
        </div>
        <details className="synopsis" open>
          <summary>Synopsis:</summary>
          <p>{synopsis}</p>
        </details>
        <details className="background" open>
          <summary>Background:</summary>
          <p>{background}</p>
        </details>
        <div className="genres">
          <h3>Genres:</h3>
          {genres.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <div className="authors">
          <h3>Authors:</h3>
          <ul>
            {authors.map((item) => (
              <li className="autor" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </MangaDetailsStyled>
  );
}

export default MangaDetails;
