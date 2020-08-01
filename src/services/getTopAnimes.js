import { API_URL } from "./settings";
// const api_URL = `${API_URL}/top/anime`;

function getTopAnimes({ type }) {
  console.log("desde el service ", type);
  var apiURL = "";
  if (type === "All") {
    console.log("entro en All");
    apiURL = `${API_URL}/top/anime/1`;
  } else {
    console.log("entro en else");
    apiURL = `${API_URL}/top/anime/1/${type}`;
  }
  const api_URL = apiURL;

  return fetch(api_URL)
    .then((response) => response.json())
    .then((data) => {
      const { top } = data;
      const animes = top.map(({ title, rank, image_url, mal_id, score }) => {
        return { title, rank, image_url, mal_id, score };
      });
      return animes;
    });
}

export default getTopAnimes;
