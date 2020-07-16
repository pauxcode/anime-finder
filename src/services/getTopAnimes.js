const apiURL = "https://api.jikan.moe/v3/top/anime";

function getTopAnimes() {
  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { top } = data;
      const animes = top.map((anime) => anime.mal_id);
      return animes;
    });
}

export default getTopAnimes;
