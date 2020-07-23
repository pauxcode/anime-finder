import React from "react";
import useTopAnimes from "hooks/useTopAnimes";
import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";

import ListOfAnimes from "components/List-Of-Animes";

function TopAnimes() {
  const { loading, topAnimes } = useTopAnimes();
  if (loading) {
    return <RotateSpinner loading={loading} />;
  }
  return (
    <div>
      <Header />

      <ListOfAnimes animes={topAnimes} seccion="top-anime" />
    </div>
  );
}

export default TopAnimes;
