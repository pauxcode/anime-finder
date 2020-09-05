import { useContext, useEffect, useState } from "react";

import getTopAnimes from "services/Top/Animes";
import getTopMangas from "services/Top/Mangas"

import AnimesContext from "context/AnimesContext";

function useTop({ type, subType = 'All' }) {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const {
    topAnimes,
    setTopAnimes,
    topMangas,
    setTopMangas
  } = useContext(AnimesContext);

  useEffect(() => {
    setLoading(true);
    if (type === "anime") {
      getTopAnimes({ type, subType }).then((topAnimes) => {
        setTopAnimes(topAnimes);
        setLoading(false);
      });
    } else {
      getTopMangas({ type, subType }).then((topMangas) => {
        setTopMangas(topMangas);
        setLoading(false)
      })
    }
  }, [setTopAnimes, setTopMangas, type, subType]);

  return { topAnimes, topMangas, loading };
}

export default useTop;
