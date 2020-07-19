import { useContext, useEffect, useState } from "react";
import getTopAnimes from "services/getTopAnimes";
import AnimesContext from "context/AnimesContext";

function useTopAnimes() {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { topAnimes, setTopAnimes, setCheckedCategory } = useContext(
    AnimesContext
  );

  useEffect(() => {
    setLoading(true);

    getTopAnimes().then((topAnimes) => {
      setTopAnimes(topAnimes);
      setCheckedCategory("top-anime");
      setLoading(false);
    });
  }, [setTopAnimes, setCheckedCategory]);
  return { loading, topAnimes };
}

export default useTopAnimes;
