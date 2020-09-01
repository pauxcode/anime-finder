import { useEffect, useState, useContext } from "react";
import getScheduleAnimes from 'services/getScheduleAnimes'
import AnimesContext from 'context/AnimesContext'

function useScheduleAnimes() {
    const { scheduleAnimes, setScheduleAnimes } = useContext(AnimesContext)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        if (scheduleAnimes <= 0) {
            getScheduleAnimes()
                .then((scheduleAnimes) => {
                    setScheduleAnimes(scheduleAnimes)
                    setLoading(false)
                })
        } else {
            setScheduleAnimes(scheduleAnimes)
            setLoading(false)
        }

    }, [scheduleAnimes, setScheduleAnimes])
    return {
        loading, scheduleAnimes
    }
}

export default useScheduleAnimes
