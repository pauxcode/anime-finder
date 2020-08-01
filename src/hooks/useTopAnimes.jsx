import { useContext, useEffect, useState } from "react";

import getTopAnimes from "services/getTopAnimes";

import AnimesContext from "context/AnimesContext";

function useTopAnimes({ type }) {
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { topAnimes, setTopAnimes } = useContext(AnimesContext);

  useEffect(() => {
    setLoading(true);

    getTopAnimes({ type }).then((topAnimes) => {
      setTopAnimes(topAnimes);
      setLoading(false);
    });
    // if (topAnimes.length <= 0 || type != "All") {
    //   getTopAnimes({ type }).then((topAnimes) => {
    //     setTopAnimes(topAnimes);
    //     setCheckedCategory("top-anime");
    //     setLoading(false);
    //   });
    // }
    // //Whit this prevent do a fetch request if the context have information
    // else {
    //   setTopAnimes(topAnimes);
    //   setCheckedCategory("top-anime");
    //   setLoading(false);
    // }
  }, [setTopAnimes, type]);

  return { topAnimes, loading };
}

export default useTopAnimes;
