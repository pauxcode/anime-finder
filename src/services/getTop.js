import { API_URL } from "./settings";
// const api_URL = `${API_URL}/top/anime`;

function getTopAnimes({ type, subType }) {
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
      const animes = top.map(
        ({
          mal_id,
          rank,
          title,
          image_url,
          type,
          episodes,
          members,
          score,
        }) => {
          return {
            mal_id,
            rank,
            title,
            image_url,
            type,
            episodes,
            members,
            score,
          };
        }
      );
      return animes;
    });
}

export default getTopAnimes;
