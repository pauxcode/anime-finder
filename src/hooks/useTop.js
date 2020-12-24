import { useEffect, useState } from "react";

import getTop from "services/getTop";

function useTop({ type, subType = 'All' }) {

  const [loading, setLoading] = useState(false);
  const [top, setTop] = useState([])

  useEffect(() => {
    setLoading(true);

    getTop({ type, subType }).then((top) => {
      setTop(top);
      setLoading(false);
    });
  }, [type, subType]);
  return { loading, top };
}

export default useTop;