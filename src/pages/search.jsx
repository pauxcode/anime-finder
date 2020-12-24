import React from "react";

import { HeadProvider, Title, Meta } from "react-head";

import useSearch from "hooks/useSearch";

import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";
import { Select } from "components/Select"
import Wrapper from "components/Wrapper";
import List from "components/List";



function PageSearch({ match }) {
  const { params } = match;
  const { keyword, rated = "All" } = params; //In the first search el rated come undefined so be for default "All" by show all the results :b *Sorry for my english
  const { loading, search } = useSearch({ keyword, rated });

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
        <Select page="search" keyword={keyword} rated={rated} />
        <header className="keyword">
          <h2>{keyword}</h2>
        </header>
        <List data={search} type="anime" />
      </Wrapper>
    </>
  );
}
export default PageSearch;