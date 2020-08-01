import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useTopAnimes from "hooks/useTopAnimes";
import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";
import SelectCategory from "components/Select-Category";
import ListOfAnimes from "components/List-Of-Animes";

function TopAnimes({ match }) {
  const { params } = match;
  const { type = "All" } = params;
  const { loading, topAnimes } = useTopAnimes({ type });
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
    <div>
      <HeadProvider>
        <Title>Top Animes || Anime Finder</Title>
        <Meta name="description" content="Top Animes" />
      </HeadProvider>
      <Header />
      <SelectCategory type={type} seccion="top-animes" />
      <ListOfAnimes animes={topAnimes} seccion="top-animes" />
    </div>
  );
}

export default TopAnimes;
