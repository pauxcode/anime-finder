import { useEffect, useState } from "react";

import getSchedule from 'services/getSchedule'

function useSchedule({ day = "All" }) {
  const [loading, setLoading] = useState(false)
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    setLoading(true);

    getSchedule({ day })
      .then((scheduleAnimes) => {
        setSchedule(scheduleAnimes);
        setLoading(false);
      });
  }, [day]);

  return { loading, schedule }
}

export default useSchedule