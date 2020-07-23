import { useContext, useEffect, useState } from "react";
import getSearchedAnimes from "services/getSearchedAnimes";
import AnimesContext from "context/AnimesContext";

function useSearchedAnimes({ keyword } = "naruto") {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { animes, setAnimes, setCheckedCategory } = useContext(AnimesContext);

  useEffect(() => {
    setLoading(true);

    getSearchedAnimes({ keyword }).then((animes) => {
      setAnimes(animes);
      setCheckedCategory("search");
      setLoading(false);
    });
  }, [keyword, setAnimes, setCheckedCategory]);

  return { loading, animes };
}

export default useSearchedAnimes;
