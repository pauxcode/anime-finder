import { useContext, useEffect, useState } from "react";
import getTopAnimes from "../services/getTopList";
import AnimesContext from "../context/AnimesContext";

export function useAnimes({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { animes, setAnimes } = useContext(AnimesContext);
  // const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTopAnimes({ keyword }).then((animes) => {
      setAnimes(animes);
      setLoading(false);
    });
  }, [setAnimes]);
  // console.log("animes desde hooks", animes);
  return { loading, animes };
}
