import { API_URL } from "./settings";

function getSearchedAnimes({
  type = "anime",
  keyword,
  limit = 25,
  page = 1,
  rated,
} = {}) {
  var apiURL = "";
  if (rated === "All") {
    console.log("Entro en ALL Search");
    apiURL = `${API_URL}/search/${type}?q=${keyword}&limit=${limit}&page=${page}`;
  } else {
    apiURL = `${API_URL}/search/${type}?q=${keyword}&limit=${limit}&page=${page}&rated=${rated}`;
  }

  const newKeyword = keyword.replace(/[ -:]/g, "");

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data; //Esta genial destructurar la data
      const animes = results
        .filter((anime) => {
          var newTitle = anime.title.replace(/[ -:]/g, "");
          return newTitle.toLowerCase().includes(newKeyword.toLowerCase());
        })
        .map((anime) => {
          const {
            mal_id,
            image_url,
            title,
            type,
            episodes,
            score,
            members,
            rated,
          } = anime;
          return {
            mal_id,
            image_url,
            title,
            type,
            episodes,
            score,
            members,
            rated,
          };
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
