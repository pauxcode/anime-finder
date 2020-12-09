import { API_URL } from './settings'

function getScheduleAnimes({ day }) {
  var apiURL = '';
  if (day === 'All') {
    apiURL = `${API_URL}/schedule`
    return fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        // sA = scheduleAnimes
        const sAMonday = mappingData(data.monday)
        const sATuesday = mappingData(data.tuesday)
        const sAWednesday = mappingData(data.wednesday)
        const sAThursday = mappingData(data.thursday)
        const sAFriday = mappingData(data.friday)
        const sASaturday = mappingData(data.saturday)
        const sASunday = mappingData(data.sunday)
        const sAOther = mappingData(data.other)
        const sAUnknown = mappingData(data.unknown)

        return { sAMonday, sATuesday, sAWednesday, sAThursday, sAFriday, sASaturday, sASunday, sAOther, sAUnknown }
      })
  } else {
    apiURL = `${API_URL}/schedule/${day}`
    return fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const sADay = mappingData(data.monday || data.tuesday || data.wednesday || data.thursday || data.friday || data.saturday || data.sunday || data.other || data.unknown)

        return { sADay }
      })
  }

}

function mappingData(data) {
  return data.map((day) => {
    const {
      mal_id,
      image_url,
      title,
      type,
      airing_start,
      episodes,
      score,
      members,
      r18,
    } = day;
    return {
      mal_id,
      image_url,
      title,
      type,
      airing_start,
      episodes,
      score,
      members,
      r18,
    };
  })
}

export default getScheduleAnimes