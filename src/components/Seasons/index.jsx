import React from "react";
import useSeasonsAnime from "hooks/useSeasonAnimes";

function Seasons() {
  const { seasons } = useSeasonsAnime();
  console.log(seasons);
  return <div>Página de Seasons</div>;
}

export default Seasons;
