import React from "react";

import { HeadProvider, Title, Meta } from "react-head";

import useDetails from "hooks/useDetails";

import { RotateSpinner } from "components/RotateSpinner";

import ButtonBack from "components/ButtonBack";
import Wrapper from "components/Wrapper";
import { DetailsAnime, DetailsManga } from "components/Details";

function PageDetails({ match, history }) {
  const { id, type } = match.params
  const { loading, details } = useDetails({ id, type });

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
        <Title>{details.title} || Anime Finder</Title>
        <Meta name="description" content={details.title} />
      </HeadProvider>

      <Wrapper>
        <ButtonBack history={history} />
        {type === "anime" ?
          <DetailsAnime {...details} />
          :
          <DetailsManga {...details} />
        }
      </Wrapper>
    </>
  );
}
export default PageDetails;