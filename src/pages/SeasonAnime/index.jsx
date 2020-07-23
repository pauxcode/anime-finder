import React from "react";
import useSeasonAnimes from "hooks/useSeasonAnimes";
import Header from "components/Header";
import ListOfAnimes from "components/List-Of-Animes";
import { RotateSpinner } from "components/RotateSpinner";

function SeasonAnime() {
  const { loading, seasonAnimes } = useSeasonAnimes();
  if (loading) {
    return <RotateSpinner loading={loading} />;
  }
  return (
    <div>
      <Header />

      <ListOfAnimes animes={seasonAnimes} seccion="season-anime" />
    </div>
  );
}

export default SeasonAnime;
