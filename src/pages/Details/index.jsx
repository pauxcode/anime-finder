import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import useSingle from "hooks/useSingleDetails";

import { RotateSpinner } from "components/RotateSpinner";
import ButtonBack from "components/Button-Back";
import Wrapper from "components/Wrapper";
import AnimeDetails from "components/Details";
import MangaDetails from "components/Details/Manga"

function PageDetail({ match, history }) {
  const { id, type } = match.params
  const { details, loading } = useSingle({ id, type });

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
        <Title>{details.title} || Anime Finder</Title>
        <Meta name="description" content={details.title} />
      </HeadProvider>
      <article>
        <ButtonBack history={history} />
        {type === "anime" ?
          <AnimeDetails {...details} />
          :
          <MangaDetails {...details} />
        }
      </article>
    </Wrapper>
  );
}

export default PageDetail;
