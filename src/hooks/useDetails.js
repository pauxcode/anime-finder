import { useState, useEffect } from "react";

import getDetails from "services/getDetails";

function useSingle({ id, type }) {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setLoading(true);

    getDetails({ id, type }).then((details) => {
      setDetails(details);
      setLoading(false);
    });

  }, [id, type]);

  return { loading, details };
}

export default useSingle