import { useEffect, useState } from "react";
import getSeasons from "services/getSeasons";

function useSeasonsAnime() {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    getSeasons().then((animes) => {
      setSeasons(animes);
    });
  }, [setSeasons]);

  console.log(seasons);
  return { seasons };
}

export default useSeasonsAnime;
