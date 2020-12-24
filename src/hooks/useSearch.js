import { useEffect, useState } from "react";

import getSearch from "services/getSearch";

function useSearch({ keyword, rated }) {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setLoading(true);

    getSearch({ keyword, rated }).then((animes) => {
      setSearch(animes);
      setLoading(false);
    });
  }, [keyword, rated]);

  return { loading, search };
}

export default useSearch;