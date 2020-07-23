import { API_URL } from "./settings";

function getSeasonAnimes() {
  const apiURL = `${API_URL}/season`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { anime } = data;
      console.log(data);
      const seasonAnimes = anime.map((seasonAnime) => {
        const {
          image_url,
          mal_id,
          title,
          type,
          synopsis,
          score,
          episodes,
        } = seasonAnime;
        return { image_url, mal_id, title, type, synopsis, score, episodes };
      });
      // .sort(function (prev, next) {
      //   if (prev.title > next.title) {
      //     return 1;
      //   }
      //   if (prev.title < next.title) {
      //     return -1;
      //   }
      //   return 0;
      // });
      // console.log(
      //   seasonAnimes.sort(function (prev, next) {
      //     if (prev.title > next.title) {
      //       return 1;
      //     }
      //     if (prev.title < next.title) {
      //       return -1;
      //     }
      //     return 0;
      //   })
      // );
      return seasonAnimes;
    });
}

export default getSeasonAnimes;
