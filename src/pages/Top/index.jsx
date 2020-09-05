import React from 'react'
import { HeadProvider, Title, Meta } from "react-head";

import useTop from 'hooks/useTop'

import { RotateSpinner } from "components/RotateSpinner";
import Wrapper from "components/Wrapper";
import Header from "components/Header";
import SelectSubType from "components/Select-Sub-Type";
import ListOfAnimes from "components/List-Of-Animes";

function Top({ match }) {
  const { params } = match;
  const { type, subType } = params;

  const { topAnimes, topMangas, loading } = useTop({ type, subType });

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
        <Title>Top {type} || Anime Finder</Title>
        <Meta name="description" content={`Top ${type}`} />
      </HeadProvider>
      <div className="header">
        <Header />
      </div>
      <SelectSubType type={type} subType={subType} seccion="top" />
      {type === 'anime' ?
        <ListOfAnimes animes={topAnimes} seccion="top-animes" />
        :
        <ListOfAnimes mangas={topMangas} seccion="top-mangas" />
      }
    </Wrapper>
  )
}

export default Top