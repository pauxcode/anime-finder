import React from "react";
// import { useHistory } from "react-router-dom";

import { HeadProvider, Title, Meta } from "react-head";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";
import useSearchedAnimes from "hooks/useSearchedAnimes";
import Header from "components/Header";

import SelectCategory from "components/Select-Category";

function SearchResults({ match }) {
  const { params } = match;
  const { keyword, rated = "All" } = params; //In the first search el rated come undefined so be for default "All" by show all the results :b *Sorry for my english
  const { loading, animes } = useSearchedAnimes({ keyword, rated });

  if (loading) {
    return <RotateSpinner loading={loading} />;
  }

  return (
    <div>
      <HeadProvider>
        <Title>{keyword} || Anime Finder</Title>
        <Meta name="description" content={`search of ${keyword}`} />
      </HeadProvider>
      <Header initialKeyword={keyword} />
      <SelectCategory keyword={keyword} rated={rated} seccion="search" />
      <h2>{keyword}</h2>
      <ListOfAnimes animes={animes} />
    </div>
  );
}

export default SearchResults;
