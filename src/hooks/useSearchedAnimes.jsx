import { useContext, useEffect, useState } from "react";
import getSearchedAnimes from "services/getSearchedAnimes";
import AnimesContext from "context/AnimesContext";

function useSearchedAnimes({ keyword, rated }) {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { animeSearched, setAnimeSearched } = useContext(AnimesContext);

  useEffect(() => {
    setLoading(true);

    getSearchedAnimes({ keyword, rated }).then((animes) => {
      setAnimeSearched(animes);
      setLoading(false);
    });
  }, [keyword, setAnimeSearched, rated]);

  return { loading, animeSearched };
}

export default useSearchedAnimes;
