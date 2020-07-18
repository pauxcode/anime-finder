import { API_URL } from "./settings";

function getSeasons() {
  const apiURL = `${API_URL}/season/archive`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const { archive } = data;
      const seasons = archive.map((season) => {
        const { seasons } = season;
        return { seasons };
      });
      console.log(seasons);
      return seasons;
    });
}

export default getSeasons;
