import React from "react";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";
import useSearchedAnimes from "hooks/useSearchedAnimes";
import Header from "components/Header";

function SearchResults({ match }) {
  const { params } = match;
  const { keyword } = params;
  const { loading, animes } = useSearchedAnimes({ keyword });

  if (loading) {
    return <RotateSpinner loading={loading} />;
  }

  return (
    <div>
      <Header />
      <ListOfAnimes animes={animes} />
    </div>
  );
}

export default SearchResults;
