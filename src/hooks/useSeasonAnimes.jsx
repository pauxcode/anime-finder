import { useContext, useEffect, useState } from "react";
import getSeasonAnimes from "services/getSeasonAnimes";
import AnimesContext from "context/AnimesContext";

function useSeasonAnimes() {
  const { seasonAnimes, setSeasonAnimes, setCheckedCategory } = useContext(
    AnimesContext
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (seasonAnimes <= 0) {
      getSeasonAnimes().then((seasonAnimes) => {
        setSeasonAnimes(seasonAnimes);
        setCheckedCategory("season-anime");
        setLoading(false);
      });
    }
    //Whit this prevent do a fetch request if the context have information
    else {
      setSeasonAnimes(seasonAnimes);
      setCheckedCategory("season-anime");
      setLoading(false);
    }
  }, [seasonAnimes, setCheckedCategory, setSeasonAnimes]);
  return { loading, seasonAnimes, setCheckedCategory };
}

export default useSeasonAnimes;
