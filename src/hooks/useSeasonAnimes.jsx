import { useContext, useEffect, useState } from "react";
import getSeasonAnimes from "services/getSeasonAnimes";
import AnimesContext from "context/AnimesContext";

function useSeasonAnimes() {
  const { seasonAnimes, setSeasonAnimes } = useContext(AnimesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (seasonAnimes <= 0) {
      getSeasonAnimes().then((seasonAnimes) => {
        setSeasonAnimes(seasonAnimes);
        setLoading(false);
      });
    }
    //Whit this prevent do a fetch request if the context have information
    else {
      setSeasonAnimes(seasonAnimes);
      setLoading(false);
    }
  }, [seasonAnimes, setSeasonAnimes]);
  return { loading, seasonAnimes };
}

export default useSeasonAnimes;
