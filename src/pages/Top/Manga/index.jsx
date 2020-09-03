import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useTop from "hooks/useTop";

import Wrapper from "components/Wrapper";
import { RotateSpinner } from "components/RotateSpinner";
import Header from "components/Header";
import SelectCategory from "components/Select-Category";
import ListOfAnimes from "components/List-Of-Animes";

function TopMangas({ match }) {
  const { params } = match;
  const { type, subType = "All" } = params;
  console.log(type);
  const { topMangas, loading } = useTop({ type, subType });
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
        <Title>Top Mangas || Anime Finder</Title>
        <Meta name="description" content="Top Animes" />
      </HeadProvider>
      <div className="header">
        <Header />
      </div>
      <SelectCategory type={subType} seccion="top-animes" />
      <ListOfAnimes animes={topMangas} seccion="top-animes" />
    </Wrapper>
  );
}

export default TopMangas;
