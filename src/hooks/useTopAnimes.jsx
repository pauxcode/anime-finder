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
    if (topAnimes.length <= 0) {
      getTopAnimes().then((topAnimes) => {
        setTopAnimes(topAnimes);
        setCheckedCategory("top-anime");
        setLoading(false);
      });
    }
    //Whit this prevent do a fetch request if the context have information
    else {
      setTopAnimes(topAnimes);
      setCheckedCategory("top-anime");
      setLoading(false);
    }
  }, [topAnimes, setTopAnimes, setCheckedCategory]);
  return { loading, topAnimes };
}

export default useTopAnimes;
