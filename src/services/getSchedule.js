import { API_URL } from './settings'

function getScheduleAnimes({ day }) {
  var apiURL = '';
  if (day === 'All') {
    apiURL = `${API_URL}/schedule`
    return fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        // s = schedule
        const sMonday = mappingData(data.monday)
        const sTuesday = mappingData(data.tuesday)
        const sWednesday = mappingData(data.wednesday)
        const sThursday = mappingData(data.thursday)
        const sFriday = mappingData(data.friday)
        const sSaturday = mappingData(data.saturday)
        const sSunday = mappingData(data.sunday)
        const sOther = mappingData(data.other)
        const sUnknown = mappingData(data.unknown)

        return { sMonday, sTuesday, sWednesday, sThursday, sFriday, sSaturday, sSunday, sOther, sUnknown }
      })
  } else {
    apiURL = `${API_URL}/schedule/${day}`
    return fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const sDay = mappingData(data.monday || data.tuesday || data.wednesday || data.thursday || data.friday || data.saturday || data.sunday || data.other || data.unknown)

        return { sDay }
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