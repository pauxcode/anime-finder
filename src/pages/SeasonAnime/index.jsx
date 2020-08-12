import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useSeasonAnimes from "hooks/useSeasonAnimes";
import Wrapper from "components/Wrapper";
import Header from "components/Header";
import ListOfAnimes from "components/List-Of-Animes";
import { RotateSpinner } from "components/RotateSpinner";

function SeasonAnime() {
  const { loading, seasonAnimes } = useSeasonAnimes();
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
        <Title>Season Animes || Anime Finder</Title>
        <Meta name="description" content="Season Animes" />
      </HeadProvider>
      <div className="header">
        <Header />
      </div>

      <ListOfAnimes animes={seasonAnimes} seccion="season-animes" />
    </Wrapper>
  );
}

export default SeasonAnime;
