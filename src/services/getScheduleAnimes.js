import { API_URL } from './settings'

function getScheduleAnimes() {
    const apiURL = `${API_URL}/schedule`

    return fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, other, unknown } = data
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
}

export default getScheduleAnimes