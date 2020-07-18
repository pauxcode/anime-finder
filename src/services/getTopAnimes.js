import { API_URL } from "./settings";

function getTopAnimes() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const { top } = data;
      const animes = top.map((anime) => anime.mal_id);
      return animes;
    });
}

export default getTopAnimes;
