import React from "react";
import Anime from "../AnimeCard";
import { ListOfAnimesStyled } from "./styles";

function ListOfAnimes({ animes, seccion }) {
  if (seccion === "top-anime") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({ mal_id, image_url, title, score, rank, type, episodes }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <Anime
                key={mal_id}
                id={mal_id}
                image_url={image_url}
                title={title}
                type={type}
                episodes={episodes === null ? type : episodes}
                score={score}
                rank={rank}
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
