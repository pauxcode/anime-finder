import React from "react";
import { DetailsStyled } from "./styles";

export function DetailsAnime({
  trailer_url,
  image_url,
  title,
  score,
  scored_by,
  type,
  status,
  episodes,
  rating,
  synopsis,
  genres = [],
  opening_themes = [],
  ending_themes = [],
}) {
  return (
    <DetailsStyled>
      <h1>{title}</h1>

      <div className="status" >
        <p><b>Type:</b> {type}</p>
        <p><b>Status:</b> {status}</p>
        <p><b>Rating: </b>{rating}</p>
        <p><b>Episodes: </b>{episodes}</p>
        <p><b>Score: </b>{score} <b>Scored by: </b>{scored_by}</p>
      </div>

      <details className="synopsis">
        <summary>Synopsis:</summary>
        <p>{synopsis}</p>
      </details>

      <h3 className="title-genres">Genres:</h3>
      <div className="genres">
        {genres.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </div>

      {opening_themes.length !== 0 ?
        <>
          <h3 className="title-openings">Openings:</h3>
          <ul className="openings">
            {opening_themes.map((item) => (
              <li className="themes" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
        :
        <></>
      }

      {ending_themes.length !== 0 ?
        <>
          <h3 className="title-endings">Endings:</h3>
          <ul className="endings">
            {ending_themes.map((item) => (
              <li className="themes" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
        :
        <></>
      }

      <h3 className="title-trailer">Trailer:</h3>
      <div className="cover trailer-video">
        {trailer_url ?
          <iframe
            title={title}
            className="iframe"
            src={trailer_url}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          :
          <p><b>Trailer not avaible</b></p>
        }
      </div>

      <div className="cover image">
        {image_url ?
          <img src={image_url} alt={title} />
          :
          <p><b>Image not avaible</b></p>
        }
      </div>

    </DetailsStyled>
  );
}

export function DetailsManga({
  image_url,
  title,
  score,
  scored_by,
  type,
  status,
  volumes,
  chapters,
  synopsis,
  background,
  genres = [],
}) {
  return (
    <DetailsStyled>
      <h1>{title}</h1>

      <div className="status" >
        <p><b>Type:</b> {type}</p>
        <p><b>Status:</b> {status}</p>
        <p><b>Volumes: </b> {volumes ? volumes : status}</p>
        <p><b>Chapters:</b> {chapters ? chapters : status}</p>
        <p><b>Score: </b>{score} <b>Scored by: </b>{scored_by}</p>
      </div>

      <details className="synopsis">
        <summary><b>Synopsis:</b></summary>
        <p>{synopsis}</p>
      </details>

      <details className="background">
        <summary><b>Background:</b></summary>
        <p>{background}</p>
      </details>

      <h3 className="title-genres">Genres:</h3>
      <div className="genres">
        {genres.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </div>

      <div className="cover image-manga">
        {image_url ?
          <img src={image_url} alt={title} />
          :
          <p><b>Image not avaible</b></p>
        }
      </div>
    </DetailsStyled>
  );
}