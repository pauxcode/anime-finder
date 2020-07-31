import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useTopAnimes from "hooks/useTopAnimes";
import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";

import ListOfAnimes from "components/List-Of-Animes";

function TopAnimes() {
  const { loading, topAnimes } = useTopAnimes();
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

      <ListOfAnimes animes={topAnimes} seccion="top-anime" />
    </div>
  );
}

export default TopAnimes;
