import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Components
import Anime from "./Anime";
import Wrapper from "./Wrapper";

const AnimeListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

export default function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://api.jikan.moe/v3/top/anime")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        let top = list.top;
        setAnimeList(top);
        // console.log(top);
      })
      .catch(() => {
        console.log("Hubo un error con la peticion...");
      });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Wrapper>
      <AnimeListStyled>
        {animeList.map(({ mal_id, title, image_url, type, score }) => {
          return (
            <Anime
              key={mal_id}
              id={mal_id}
              title={title}
              image={image_url}
              type={type}
              score={score}
            />
          );
        })}
      </AnimeListStyled>
    </Wrapper>
  );
}
