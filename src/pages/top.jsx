import React from 'react'
import { HeadProvider, Title, Meta } from "react-head";

import useTop from 'hooks/useTop'

import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";
import Wrapper from "components/Wrapper";
import { Select } from "components/Select"
import List from "components/List";

function PageTop({ match }) {
  const { params } = match;
  const { type, subType } = params;

  const { loading, top } = useTop({ type, subType });
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
        <Title>Top {type} || Anime Finder</Title>
        <Meta name="description" content={`Top ${type}`} />
      </HeadProvider>

      <Header />

      <Wrapper>
        <Select page="top" type={type} subType={subType} />
        <List data={top} type={type} />
      </Wrapper>
    </>
  )
}
export default PageTop;