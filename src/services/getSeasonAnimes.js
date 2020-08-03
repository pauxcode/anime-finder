import { API_URL } from "./settings";

function getSeasonAnimes() {
  const apiURL = `${API_URL}/season`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { anime } = data;
      const seasonAnimes = anime.map((seasonAnime) => {
        const {
          mal_id,
          title,
          image_url,
          type,
          airing_start,
          episodes,
          members,
          score,
          r18,
        } = seasonAnime;
        return {
          mal_id,
          title,
          image_url,
          type,
          airing_start,
          episodes,
          members,
          score,
          r18,
        };
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
