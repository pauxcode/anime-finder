import React from "react";

import { ListOfAnimesStyled } from "./styles";

import Anime from "../AnimeCard";

function ListOfAnimes({ animes, seccion }) {
  if (seccion === "top-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({
            mal_id,
            rank,
            title,
            image_url,
            type,
            episodes,
            members,
            score,
          }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <Anime
                key={mal_id}
                id={mal_id}
                rank={rank}
                title={title}
                image={image_url}
                type={type}
                episodes={episodes}
                members={members}
                score={score}
                seccion={seccion}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  } else {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({ mal_id, image_url, title, type, score, episodes, r18, rated }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <Anime
                key={mal_id}
                id={mal_id}
                image_url={image_url}
                title={title}
                type={type}
                episodes={episodes}
                score={score}
                r18={r18}
                rated={rated}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  }
}

export default ListOfAnimes;
