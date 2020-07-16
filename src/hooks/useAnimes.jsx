import { useEffect, useState } from "react";
import getAnimes from "../services/getAnimes";

function useAnimes({ keyword } = {}) {
  //If no recibimos keyword usara 'bleach'
  const [loading, setLoading] = useState(false);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setLoading(true);

    // recuperamos la keyword del localStorage
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "bleach";
    // Si tenemos keyword la usamos, sino usamos la ultima busqueda, sino bleach

    getAnimes({ keyword: keywordToUse }).then((animes) => {
      setAnimes(animes);
      setLoading(false);
      // guardamos la keyword del localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, animes };
}

export default useAnimes;
