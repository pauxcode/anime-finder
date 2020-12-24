import { API_URL } from "services/settings";

function getTop({ type, subType }) {
  var apiURL = "";
  if (subType === "All") {
    apiURL = `${API_URL}/top/${type}/1`;
  } else {
    apiURL = `${API_URL}/top/${type}/1/${subType}`;
  }
  const api_URL = apiURL;

  return fetch(api_URL)
    .then((response) => response.json())
    .then((data) => {
      const { top } = data;

      const topData = mappingData(top)

      return topData;
    });
}

function mappingData(data) {
  return data.map((day) => {
    const {
      mal_id,
      rank,
      title,
      image_url,
      type,
      episodes,
      volumes,
      members,
      score,
    } = day;
    return {
      mal_id,
      rank,
      title,
      image_url,
      type,
      episodes,
      volumes,
      members,
      score,
    };
  })
}

export default getTop;