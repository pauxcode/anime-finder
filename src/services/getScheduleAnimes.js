import { API_URL } from './settings'

function getScheduleAnimes({ day }) {
    let apiURL = ""
    switch (day) {
        case "All":
            apiURL = `${API_URL}/schedule`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, other, unknown } = data;
                    const scheduleAnimesMonday = monday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesTuesday = tuesday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesWednesday = wednesday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesThursday = thursday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesFriday = friday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesSaturday = saturday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesSunday = sunday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesOther = other.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    const scheduleAnimesUnknown = unknown.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    // Para regresar todos en un solo array
                    // const scheduleAnimesAll = scheduleAnimesMonday.concat(scheduleAnimesTuesday, scheduleAnimesWednesday, scheduleAnimesThursday, scheduleAnimesFriday, scheduleAnimesSaturday, scheduleAnimesSunday, scheduleAnimesOther, scheduleAnimesUnknown)
                    return { scheduleAnimesMonday, scheduleAnimesTuesday, scheduleAnimesWednesday, scheduleAnimesThursday, scheduleAnimesFriday, scheduleAnimesSaturday, scheduleAnimesSunday, scheduleAnimesOther, scheduleAnimesUnknown }
                })
        case "monday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { monday } = data;

                    const scheduleAnimesMonday = monday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesMonday
                    }
                })
        case "tuesday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { tuesday } = data;

                    const scheduleAnimesTuesday = tuesday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesTuesday
                    }
                })
        case "wednesday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { wednesday } = data;

                    const scheduleAnimesWednesday = wednesday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesWednesday
                    }
                })
        case "thursday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { thursday } = data;

                    const scheduleAnimesThursday = thursday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesThursday
                    }
                })
        case "friday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { friday } = data;

                    const scheduleAnimesFriday = friday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesFriday
                    }
                })
        case "saturday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { saturday } = data;

                    const scheduleAnimesSaturday = saturday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesSaturday
                    }
                })
        case "sunday":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { sunday } = data;

                    const scheduleAnimesSunday = sunday.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesSunday
                    }
                })
        case "other":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { other } = data;

                    const scheduleAnimesOther = other.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesOther
                    }
                })
        case "unknown":
            apiURL = `${API_URL}/schedule/${day}`
            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    const { unknown } = data;

                    const scheduleAnimesUnknown = unknown.map((anime) => {
                        const {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        } = anime
                        return {
                            mal_id,
                            title, image_url,
                            type,
                            airing_start,
                            episodes,
                            members,
                            score,
                            r18
                        }
                    })
                    return {
                        scheduleAnimesUnknown
                    }
                })
        default:
            break;
    }
}

export default getScheduleAnimes