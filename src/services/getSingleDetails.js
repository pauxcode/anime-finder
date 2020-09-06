import { API_URL } from "./settings";
function getSingleDetails({ id, type }) {
  const api_URL = `${API_URL}/${type}/${id}`;
  return fetch(api_URL)
    .then((response) => response.json())
    .then((data) => {
      const details = data;
      return details;
    });
}

export default getSingleDetails;
