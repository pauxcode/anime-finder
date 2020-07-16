import React from "react";
import Anime from "./Anime";

function ListOfAnimes({ animes }) {
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

export default ListOfAnimes;
