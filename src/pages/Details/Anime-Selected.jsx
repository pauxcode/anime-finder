import React from "react";
import styled from "styled-components";

const AnimeSelectedStyled = styled.div`
  background: var(--background);
  .iframe {
    width: 100%;
  }
  .synopsis {
    background: var(--white);
  }
  .genres {
    display: grid;
    grid-template-columns: repeat(auto-fill, 114px);
    row-gap: 10px;
    justify-items: center;
    span {
      padding: 5px;
      width: 91px;
      text-align: center;
      background: var(--white);
      border-radius: 5px;
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    }
  }
`;

function AnimeSelected({
  title,
  trailer_url,
  synopsis,
  genres = [],
  opening_themes = [],
  ending_themes = [],
}) {
  return (
    <AnimeSelectedStyled>
      <iframe
        title={title}
        className="iframe"
        src={trailer_url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
      <h3>Description: </h3>
      <p className="synopsis">{synopsis}</p>
      <h3>Genres: </h3>
      <p className="genres">
        {genres.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </p>
      <h3>Opening Themes</h3>
      <ul>
        {opening_themes.map((item) => (
          <li className="themes" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <h3>Ending Themes</h3>
      <ul>
        {ending_themes.map((item) => (
          <li className="themes" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </AnimeSelectedStyled>
  );
}

export default AnimeSelected;
