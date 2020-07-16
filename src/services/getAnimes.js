function getTopAnimes({ keyword = "bleach" } = {}) {
  //establecemos el valor por defector con = {}
  const apiURL = `https://api.jikan.moe/v3/search/anime?q=${keyword}`;

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

export default getTopAnimes;
