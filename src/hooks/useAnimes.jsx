import { useContext, useEffect, useState } from "react";
import getAnimes from "../services/getAnimes";
import AnimesContext from "../context/AnimesContext";

function useAnimes({ keyword } = {}) {
  //If no recibimos keyword usara 'bleach'
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { animes, setAnimes } = useContext(AnimesContext);

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
  }, [keyword, setAnimes]);

  return { loading, animes };
}

export default useAnimes;
