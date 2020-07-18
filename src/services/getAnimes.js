import { API_URL } from "./settings";

function getAnimes({ limit = 25, keyword = "bleach", page = 1 } = {}) {
  //establecemos el valor por defector con = {keyword: null}
  const apiURL = `${API_URL}/search/anime?q=${keyword}&limit=${limit}&page=${page}`;
  console.log(
    `${API_URL}/search/anime?q=${keyword}&limit=${limit}&page=${page}`
  );

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data; //Esta genial destructurar la data
      const animes = results.map((anime) => {
        const { mal_id, image_url, title, type, score } = anime;
        return { mal_id, image_url, title, type, score };
      });
      return animes;
    });
}

export default getAnimes;
