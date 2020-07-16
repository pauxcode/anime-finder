import React, { useState, useEffect } from "react";
import getTopList from "../../services/getTopList";

import Anime from "../Anime.jsx";

export default function ListTopOfAnimes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    setLoading(true);
    getTopList().then((animes) => {
      setAnimes(animes);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <i>Cargando...</i>;
  }

  return (
    <div className="ListOfAnimes">
      <h2>List of top animes</h2>
      <section>
        {animes.map(({ mal_id, title, image_url, type, score }) => {
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
      </section>
    </div>
  );
}
