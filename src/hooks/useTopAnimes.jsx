import { useContext, useEffect, useState } from "react";
import getTopAnimes from "services/getTopAnimes";
import AnimesContext from "context/AnimesContext";

function useTopAnimes() {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { topAnimes, setTopAnimes } = useContext(AnimesContext);

  useEffect(() => {
    setLoading(true);

    getTopAnimes().then((topAnimes) => {
      setTopAnimes(topAnimes);
      setLoading(false);
    });
  }, [setTopAnimes]);
  return { loading, topAnimes };
}

export default useTopAnimes;
