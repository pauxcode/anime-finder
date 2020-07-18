import React from "react";
import useTopAnimes from "hooks/useTopAnimes";

import Header from "components/Header";

import ListOfAnimes from "components/ListOfAnimes";

function TopAnimes() {
  const { loading, topAnimes } = useTopAnimes();
  return (
    <div>
      <Header />

      <ListOfAnimes animes={topAnimes} seccion="top-anime" />
    </div>
  );
}

export default TopAnimes;
