import { API_URL } from "services/settings";

function getTopMangas({ type, subType }) {
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
      const mangas = top.map(
        ({
          mal_id,
          rank,
          title,
          type,
          volumes,
          members,
          score,
          image_url,
        }) => {
          return {
            mal_id,
            rank,
            title,
            type,
            volumes,
            members,
            score,
            image_url,
          };
        }
      );
      return mangas;
    });
}

export default getTopMangas;
