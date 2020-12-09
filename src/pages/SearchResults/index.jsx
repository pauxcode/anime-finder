import React from "react";
// import { useHistory } from "react-router-dom";

import { HeadProvider, Title, Meta } from "react-head";
import Wrapper from "components/Wrapper";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";
import useSearchedAnimes from "hooks/useSearchedAnimes";
import Header from "components/Header";

import { PagesStyled } from '../styles'

import SelectCategory from "components/Select-Sub-Type";

function SearchResults({ match }) {
  const { params } = match;
  const { keyword, rated = "All" } = params; //In the first search el rated come undefined so be for default "All" by show all the results :b *Sorry for my english
  const { loading, animeSearched } = useSearchedAnimes({ keyword, rated });

  if (loading) {
    return <RotateSpinner loading={loading} />;
  }

  return (
    <>
      <HeadProvider>
        <Title>{keyword} || Anime Finder</Title>
        <Meta name="description" content={`search of ${keyword}`} />
      </HeadProvider>
      <Header initialKeyword={keyword} />
      <Wrapper>
        <PagesStyled>
          <nav>
            <SelectCategory keyword={keyword} rated={rated} seccion='search' />
          </nav>
          <header className="keyword">
            <h2>{keyword}</h2>
          </header>
        </PagesStyled>
        <ListOfAnimes animes={animeSearched} seccion="search" />
      </Wrapper>
    </>
  );
}

export default SearchResults;
