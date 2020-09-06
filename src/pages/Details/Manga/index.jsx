import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

// import AnimesContext from "context/AnimesContext";
import Wrapper from "components/Wrapper";
import { RotateSpinner } from "components/RotateSpinner";
import AnimeDetails from "components/Details";
import ButtonBack from "components/Button-Back";
import useSingleAnime from "hooks/useSingleDetails";

function MangaDetails({ match, history }) {
  const mal_id = match.params.id;
  const { anime, loading } = useSingleAnime({ mal_id });
  if (loading) {
    return (
      <>
        <HeadProvider>
          <Title>Cargando...</Title>
        </HeadProvider>
        <RotateSpinner loading={loading} />
      </>
    );
  }
  return (
    <Wrapper>
      <HeadProvider>
        <Title>{anime.title} || Anime Finder</Title>
        <Meta name="description" content={anime.title} />
      </HeadProvider>
      <article>
        <ButtonBack history={history} />
        <AnimeDetails {...anime} />
      </article>
    </Wrapper>
  );
}

export default MangaDetails;
