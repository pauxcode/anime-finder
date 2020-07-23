import { API_URL } from "./settings";

function getSearchedAnimes({
  type = "anime",
  keyword,
  limit = 25,
  page = 1,
} = {}) {
  const apiURL = `${API_URL}/search/${type}?q=${keyword}&limit=${limit}&page=${page}`;

  const newKeyword = keyword.replace(/[ -:]/g, "");

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data; //Esta genial destructurar la data
      console.log(results);
      const animes = results
        .filter((anime) => {
          var newTitle = anime.title.replace(/[ -:]/g, "");
          return newTitle.toLowerCase().includes(newKeyword.toLowerCase());
        })
        .map((anime) => {
          const { mal_id, image_url, title, type, score } = anime;
          return { mal_id, image_url, title, type, score };
        })
        .sort((prev, next) => {
          if (prev.title > next.title) {
            return 1;
          }
          if (prev.title < next.title) {
            return -1;
          }
          return 0;
        });

      return animes;
    });
}

export default getSearchedAnimes;
