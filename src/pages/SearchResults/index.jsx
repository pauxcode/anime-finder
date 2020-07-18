import React from "react";
import ListOfAnimes from "components/ListOfAnimes";
import useAnimes from "hooks/useAnimes";
import Header from "components/Header";

function SearchResults({ match }) {
  const { params } = match;
  const { keyword } = params;
  const { loading, animes } = useAnimes({ keyword });

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Header />
      <ListOfAnimes animes={animes} />
    </div>
  );
}

export default SearchResults;
