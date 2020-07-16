import React, { useEffect, useState } from "react";
// import Search from './Search'
import Anime from "../pages/Anime/Anime";

function Prueba() {
  //Lo que quiero hacer es que cada que el usuario digite algo en el input  pase un 1 segundo y le arroje resultados de la busqueda
  const [animeSearched, setAnimeSearched] = useState([]);
  function handleChange(e) {
    console.log(e.target.value.length);
    var search = e.target.value;
    if (search.length === 3 || search.length === 6 || search.length === 9) {
      console.log(
        `https://api.jikan.moe/v3/search/anime?q=${search}&order_by=title`
      );
      fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&order_by=title`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let results = data.results;
          setAnimeSearched(results);
        });
    } else if (search.length < 3) {
      console.log("Necesitas ingresar 3 letras");
    } else {
      console.log("Cargando");
    }
  }
  console.log(animeSearched);

  // console.log(search);
  return (
    <div>
      {/* <input name="firstName" onChange={(e) => setInput(e.target.value)} /> */}
      <input name="firstName" onChange={handleChange} />
      {animeSearched.map(({ mal_id, title, image_url, type, score }) => {
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
    </div>
  );
}

export default Prueba;
