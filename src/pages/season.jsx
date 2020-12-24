import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useSeason from "hooks/useSeason";

import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";
import Wrapper from "components/Wrapper";
import { Select } from "components/Select"
import List from "components/List";

function PageSeason({ match }) {
  const { year, season } = match.params;
  const { loading, seasonData } = useSeason({ year, season });

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
    <>
      <HeadProvider>
        <Title>Season Animes || Anime Finder</Title>
        <Meta name="description" content="Season Animes" />
      </HeadProvider>

      <Header />

      <Wrapper>
        <Select page="season" year={year} season={season} />
        <List data={seasonData} type="anime" />
      </Wrapper>
    </>
  );
}
export default PageSeason;