import { API_URL } from "./settings";
const api_URL = `${API_URL}/top/anime`;

function getTopAnimes() {
  return fetch(api_URL)
    .then((response) => response.json())
    .then((data) => {
      const { top } = data;
      console.log(top);
      const animes = top.map(({ title, rank, image_url, mal_id, score }) => {
        return { title, rank, image_url, mal_id, score };
      });
      return animes;
    });
}

export default getTopAnimes;
