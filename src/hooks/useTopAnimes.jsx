import { useContext, useEffect, useState } from "react";
import getTopAnimes from "services/getTopAnimes";
import AnimesContext from "context/AnimesContext";

function useTopAnimes({ type }) {
  console.log(type);
  const [loading, setLoading] = useState(false);
  //Ahora actualizamos el estado global
  const { topAnimes, setTopAnimes, setCheckedCategory } = useContext(
    AnimesContext
  );

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    getTopAnimes({ type }).then((topAnimes) => {
      setTopAnimes(topAnimes);
      setCheckedCategory("top-anime");
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
  }, [type, setCheckedCategory, setTopAnimes]);
  return { loading, topAnimes };
}

export default useTopAnimes;
