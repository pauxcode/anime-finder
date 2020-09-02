import { useEffect, useState, useContext } from "react";

import getScheduleAnimes from 'services/getScheduleAnimes'

import AnimesContext from 'context/AnimesContext'

function useScheduleAnimes({ day = "All" }) {
    const { scheduleAnimes, setScheduleAnimes } = useContext(AnimesContext)
    // const [scheduleAnimes, setScheduleAnimes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        getScheduleAnimes({ day })
            .then((scheduleAnimes) => {
                setScheduleAnimes(scheduleAnimes);
                setLoading(false);
            });
    }, [setScheduleAnimes, day]);

    return { loading, scheduleAnimes }
}

export default useScheduleAnimes
