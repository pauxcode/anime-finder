import { API_URL } from "./settings";
function getSingleAnime({ type = "anime", mal_id }) {
  const api_URL = `${API_URL}/${type}/${mal_id}`;
  return fetch(api_URL)
    .then((response) => response.json())
    .then((data) => {
      const anime = data;
      return anime;
    });
}

export default getSingleAnime;
