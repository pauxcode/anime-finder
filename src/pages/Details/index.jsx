import React, { useContext } from "react";
import AnimesContext from "../../context/AnimesContext";
import Anime from "../../components/Anime";

function Detail({ match }) {
  console.log(match.params.id);

  const { animes } = useContext(AnimesContext);
  const anime = animes.find(
    (singleAnime) => singleAnime.mal_id == match.params.id
  );
  console.log(anime);

  return <Anime {...anime} />;
}

export default Detail;
