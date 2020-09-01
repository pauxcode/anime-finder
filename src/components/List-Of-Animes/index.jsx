import React from "react";

import { ListOfAnimesStyled } from "./styles";

import TopAnime from "components/AnimeCard/Top-Anime";
import SeasonAnime from "components/AnimeCard/Season-Anime";
import ScheduleAnime from 'components/AnimeCard/Schedule-Anime'
import SearchedAnime from "components/AnimeCard/Searched-Anime";

function ListOfAnimes({ animes, seccion }) {
  if (seccion === "top-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({
            mal_id,
            rank,
            title,
            image_url,
            type,
            episodes,
            members,
            score,
          }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <TopAnime
                key={mal_id}
                id={mal_id}
                rank={rank}
                title={title}
                image={image_url}
                type={type}
                episodes={episodes}
                members={members}
                score={score}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "search") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({
            mal_id,
            image_url,
            title,
            type,
            episodes,
            score,
            members,
            rated,
          }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <SearchedAnime
                key={mal_id}
                id={mal_id}
                image={image_url}
                title={title}
                type={type}
                episodes={episodes}
                score={score}
                members={members}
                rated={rated}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "season-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({
            mal_id,
            title,
            image_url,
            type,
            airing_start,
            episodes,
            members,
            score,
            r18,
          }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <SeasonAnime
                key={mal_id}
                id={mal_id}
                title={title}
                image={image_url}
                type={type}
                airing_start={airing_start}
                episodes={episodes}
                members={members}
                score={score}
                r18={r18}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "schedule-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map(
          ({
            mal_id,
            title,
            image_url,
            type,
            airing_start,
            episodes,
            members,
            score,
            r18,
          }) => {
            //Extraemos los datos que nos llegan :b
            return (
              <ScheduleAnime
                key={mal_id}
                id={mal_id}
                title={title}
                image={image_url}
                type={type}
                airing_start={airing_start}
                episodes={episodes}
                members={members}
                score={score}
                r18={r18}
              />
            );
          }
        )}
      </ListOfAnimesStyled>
    );
  }
}

export default ListOfAnimes;
