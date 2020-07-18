import React from "react";
import Anime from "./Anime";

function ListOfAnimes({ animes, seccion }) {
  if (seccion === "top-anime") {
    return (
      <div>
        {animes.map(({ mal_id, image_url, title, score, rank }) => {
          //Extraemos los datos que nos llegan :b
          return (
            <Anime
              key={mal_id}
              id={mal_id}
              image_url={image_url}
              title={title}
              score={score}
              rank={rank}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {animes.map(({ mal_id, image_url, title, type, score }) => {
          //Extraemos los datos que nos llegan :b
          return (
            <Anime
              key={mal_id}
              id={mal_id}
              image_url={image_url}
              title={title}
              type={type}
              score={score}
            />
          );
        })}
      </div>
    );
  }
}

export default ListOfAnimes;
