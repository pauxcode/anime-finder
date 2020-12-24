import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from "styled-components"

import useForm from 'hooks/useForm'

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
const SEASONS = [
  "winter",
  "summer",
  "spring",
  "fall",
]
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Other",
  "Unknown",
];
const SEARCH_RATEDS = [
  "G",
  "PG",
  "PG13",
  "R17",
  "R",
  "Rx"
];

const SelectStyled = styled.select`
  margin-bottom: 1rem;
  max-width: 155px;
  width: 100%;
  height: 25px;
`;

export function Select({ page, type, subType, year = 2020, season, day, keyword, rated }) {
  const history = useHistory();

  const { updateSubType, updateSeason, updateDay } = useForm({
    initialSubType: subType,
    initialSeason: season,
    initialDay: day,
  })

  const handleChange = (e) => {
    updateSubType(e.target.value);
    updateSeason(e.target.value);
    updateDay(e.target.value);
    if (e.target.value === "All" && page === "top") {
      history.push(`/${page}/${type}`)
    } else if (e.target.value === "Current") {
      history.push(`/${page}`)
    } else if (page === "top") {
      history.push(`/${page}/${type}/${e.target.value}`)
    } else if (page === "season") {
      history.push(`/${page}/${year}/${e.target.value}`)
    } else if (page === "search") {
      history.push(`/${page}/${keyword}/${e.target.value}`)
    } else {
      history.push(`/${page}/${e.target.value}`)
    }
  }

  switch (page) {
    case "top":
      return (
        <SelectStyled onChange={handleChange} value={subType}>
          <option>All</option>
          {type === "anime" ?
            ANIME_SUB_TYPE.map(subType => (
              <option key={subType}>{subType}</option>
            ))
            :
            MANGA_SUB_TYPE.map(subType => (
              <option key={subType}>{subType}</option>
            ))
          }
        </SelectStyled>
      )

    case "season":
      return (
        <SelectStyled onChange={handleChange} value={season}>
          <option>Current</option>
          {SEASONS.map(season => (
            <option key={season}>{season}</option>
          ))
          }
        </SelectStyled>
      )

    case "schedule":
      return (
        <SelectStyled onChange={handleChange} value={day}>
          <option>All</option>
          {DAYS.map(day => (
            <option key={day}>{day}</option>
          ))
          }
        </SelectStyled>
      )

    case "search":
      return (
        <SelectStyled onChange={handleChange} value={rated}>
          <option>All</option>
          {SEARCH_RATEDS.map(rated => (
            <option key={rated}>{rated}</option>
          ))
          }
        </SelectStyled>
      )

    default:
      return (
        <SelectStyled value="All">
          <option>All with Error</option>
        </SelectStyled>
      )
  }
}