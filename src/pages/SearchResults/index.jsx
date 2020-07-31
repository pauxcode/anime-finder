import React from "react";
import { useHistory } from "react-router-dom";

import { HeadProvider, Title, Meta } from "react-head";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";
import useSearchedAnimes from "hooks/useSearchedAnimes";
import Header from "components/Header";
import useForm from "components/Input-Search/hook";

const RATEDS = ["g", "pg", "pg13", "r17", "r", "rx"];

function SearchResults({ match }) {
  const { params } = match;
  const { keyword, rated = "All" } = params; //In the first search el rated come undefined so be for default "All" by show all the results :b *Sorry for my english
  const { loading, animes } = useSearchedAnimes({ keyword, rated });
  const history = useHistory();

  const { updateRated } = useForm({
    initialRated: rated,
  });

  const handleChangeRated = (e) => {
    updateRated(e.target.value);
    if (e.target.value === "All") {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/search/${keyword}/${e.target.value}`);
    }
  };

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
      <select onChange={handleChangeRated} value={rated}>
        <option>All</option>
        {RATEDS.map((rated) => (
          <option key={rated}>{rated}</option>
        ))}
      </select>
      <h2>{keyword}</h2>
      <ListOfAnimes animes={animes} />
    </div>
  );
}

export default SearchResults;
