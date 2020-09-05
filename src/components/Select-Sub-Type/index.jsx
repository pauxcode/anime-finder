import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "hooks/updateParams";

const SEARCH_RATEDS = ["g", "pg", "pg13", "r17", "r", "rx"];
const ANIME_SUB_TYPE = [
  "bypopularity",
  "favorite",
  "airing",
  "upcoming",
  "tv",
  "movie",
  "ova",
  "special",
];
const MANGA_SUB_TYPE = [
  "bypopularity",
  "favorite",
  "manga",
  "novels",
  "oneshots",
  "doujin",
  "manhwa",
  "manhua",
];

function SelectSubType({ keyword, rated, seccion, type, subType }) {
  const history = useHistory();

  const { updateRated, updateType } = useForm({
    initialRated: rated,
    initialSubType: subType,
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
        {SEARCH_RATEDS.map((rated) => (
          <option key={rated}>{rated}</option>
        ))}
      </select>
    );
  } else if (seccion === "top") {
    const handleChangeType = (e) => {
      updateType(e.target.value);
      if (e.target.value === "All") {
        history.push(`/top/${type}`);
      } else {
        history.push(`/top/${type}/${e.target.value}`);
      }
    };
    return (
      <select onChange={handleChangeType} value={subType}>
        <option>All</option>
        {type === 'anime' ?
          ANIME_SUB_TYPE.map((subType) => (
            <option key={subType}>{subType}</option>
          ))
          :
          MANGA_SUB_TYPE.map((subType) => (
            <option key={subType}>{subType}</option>
          ))
        }
      </select>
    );
  }
}

export default SelectSubType;
