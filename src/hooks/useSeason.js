import { useEffect, useState } from "react";

import getSeason from "services/getSeason";

function useSeason({ year, season }) {
  const [loading, setLoading] = useState(false)
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    setLoading(true);

    getSeason({ year, season }).then((seasonAnimes) => {
      setSeasonData(seasonAnimes);
      setLoading(false);
    });

  }, [year, season]);

  return { loading, seasonData };
}

export default useSeason;