import { API_URL } from "./settings";

export default function getTopList({ type = "anime" } = {}) {
  const apiURL = `${API_URL}/top/${type}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { top } = response;
      const animes = top.map((anime) => {
        const { mal_id, title, image_url, type, score } = anime;
        return { mal_id, title, image_url, type, score };
      });
      // console.log(animes);
      return animes;
    });
}
