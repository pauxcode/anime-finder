import { useContext, useEffect, useState } from "react";
import getAnimes from "services/getAnimes";
import AnimesContext from "context/AnimesContext";

// const INITIAL_PAGE = 0;

function useAnimes({ keyword } = {}) {
  //If no recibimos keyword usara 'bleach'
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(INITIAL_PAGE); para la paginacio
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

  /* Para paginacion... */
  // useEffect(() => {
  //   if (page === INITIAL_PAGE) return
  //   getAnimes
  // }, [input])
  return { loading, animes };
}

export default useAnimes;
