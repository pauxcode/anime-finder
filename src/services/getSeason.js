import { API_URL } from "./settings";

function getSeason({ year, season = "Current" }) {
  console.log(year, season);
  let apiURL = "";
  if (season === "Current") {
    apiURL = `${API_URL}/season`;
  } else {
    apiURL = `${API_URL}/season/${year}/${season}`;
  }

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
      return seasonAnimes;
    });
}

export default getSeason;