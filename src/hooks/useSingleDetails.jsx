import { useState, useEffect } from "react";
import getSingleDetails from "services/getSingleDetails";

function useSingle({ id, type }) {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getSingleDetails({ id, type }).then((details) => {
      setDetails(details);
      setLoading(false);
    });

  }, [id, type]);
  return { details, loading };
}

export default useSingle;
