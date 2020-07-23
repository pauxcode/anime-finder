import { useState, useEffect } from "react";
import getSingleAnime from "services/getSingleAnime";

function useSingleAnime({ mal_id }) {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    getSingleAnime({ mal_id }).then((anime) => {
      setAnime(anime);
      setLoading(false);
    });
  }, [mal_id]);
  return { anime, loading };
}

export default useSingleAnime;
