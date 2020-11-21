import React from "react";

import { ListOfAnimesStyled } from "./styles";

import SelectSubType from "components/Select-Sub-Type";

import TopAnime from "components/Cards/Top-Anime";
import TopManga from "components/Cards/Top-Manga"
import SeasonAnime from "components/Cards/Season-Anime";
import ScheduleAnime from 'components/Cards/Schedule-Anime'
import SearchedAnime from "components/Cards/Searched-Anime";

function ListOfAnimes({ animes, mangas, seccion, type, subType }) {
  if (seccion === "top-animes") {
    return (
      <ListOfAnimesStyled>
        <SelectSubType type={type} subType={subType} seccion="top" />
        <span></span>
        {animes.map((anime) => {
          return (
            <TopAnime
              key={anime.mal_id}
              id={anime.mal_id}
              rank={anime.rank}
              title={anime.title}
              image={anime.image_url}
              type={anime.type}
              episodes={anime.episodes}
              members={anime.members}
              score={anime.score}
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "top-mangas") {
    return (
      <ListOfAnimesStyled>
        {mangas.map((manga) => {
          return (
            <TopManga
              key={manga.mal_id}
              id={manga.mal_id}
              rank={manga.rank}
              title={manga.title}
              type={manga.type}
              volumes={manga.volumes}
              members={manga.members}
              score={manga.score}
              image={manga.image_url}
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "search") {
    return (
      <ListOfAnimesStyled>
        {animes.map((searchedAnime) => {
          return (
            <SearchedAnime
              key={searchedAnime.mal_id}
              id={searchedAnime.mal_id}
              image={searchedAnime.image_url}
              title={searchedAnime.title}
              type={searchedAnime.type}
              episodes={searchedAnime.episodes}
              score={searchedAnime.score}
              members={searchedAnime.members}
              rated={searchedAnime.rated}
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "season-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map((seasonAnime) => {
          return (
            <SeasonAnime
              key={seasonAnime.mal_id}
              id={seasonAnime.mal_id}
              title={seasonAnime.title}
              image={seasonAnime.image_url}
              type={seasonAnime.type}
              airing_start={seasonAnime.airing_start}
              episodes={seasonAnime.episodes}
              members={seasonAnime.members}
              score={seasonAnime.score}
              r18={seasonAnime.r18}
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  } else if (seccion === "schedule-animes") {
    return (
      <ListOfAnimesStyled>
        {animes.map((scheduleAnime) => {
          return (
            <ScheduleAnime
              key={scheduleAnime.mal_id}
              id={scheduleAnime.mal_id}
              title={scheduleAnime.title}
              image={scheduleAnime.image_url}
              type={scheduleAnime.type}
              airing_start={scheduleAnime.airing_start}
              episodes={scheduleAnime.episodes}
              members={scheduleAnime.members}
              score={scheduleAnime.score}
              r18={scheduleAnime.r18}
            />
          );
        })}
      </ListOfAnimesStyled>
    );
  }
}

export default ListOfAnimes;
