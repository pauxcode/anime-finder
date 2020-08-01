import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "hooks/updateParams";

const RATEDS = ["g", "pg", "pg13", "r17", "r", "rx"];
const TYPE = [
  "bypopularity",
  "favorite",
  "airing",
  "upcoming",
  "tv",
  "movie",
  "ova",
  "special",
];

function SelectCategory({ keyword, rated, seccion, type }) {
  const history = useHistory();

  const { updateRated, updateType } = useForm({
    initialRated: rated,
    initialType: type,
  });

  if (seccion === "search") {
    const handleChangeRated = (e) => {
      updateRated(e.target.value);
      if (e.target.value === "All") {
        history.push(`/search/${keyword}`);
      } else {
        history.push(`/search/${keyword}/${e.target.value}`);
      }
    };
    return (
      <select onChange={handleChangeRated} value={rated}>
        <option>All</option>
        {RATEDS.map((rated) => (
          <option key={rated}>{rated}</option>
        ))}
      </select>
    );
  } else if (seccion === "top-animes") {
    const handleChangeType = (e) => {
      updateType(e.target.value);
      if (e.target.value === "All") {
        history.push(`/top/anime`);
      } else {
        history.push(`/top/anime/${e.target.value}`);
      }
    };
    return (
      <select onChange={handleChangeType} value={type}>
        <option>All</option>
        {TYPE.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    );
  }
}

export default SelectCategory;
