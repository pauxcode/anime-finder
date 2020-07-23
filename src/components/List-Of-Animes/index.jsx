import React from "react";
import Anime from "../AnimeCard";
import { ListOfAnimesStyled } from "./styles";

function ListOfAnimes({ animes, seccion }) {
  console.log(animes);
  if (seccion === "top-anime") {
    return (
      <div>
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
      </div>
    );
  } else {
    return (
      <ListOfAnimesStyled>
        {animes.map(({ mal_id, image_url, title, type, score, episodes }) => {
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
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  }
}

export default ListOfAnimes;
