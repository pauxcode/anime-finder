import React from "react";
// import AnimesContext from "context/AnimesContext";
import { RotateSpinner } from "components/RotateSpinner";
import AnimeDetails from "components/AnimeDetails";
import ButtonBack from "components/Button-Back";
import useSingleAnime from "hooks/useSingleAnime";

function PageDetail({ match, history }) {
  const mal_id = match.params.id;
  const { anime, loading } = useSingleAnime({ mal_id });
  if (loading) {
    return <RotateSpinner loading={loading} />;
  }
  return (
    <div>
      <ButtonBack history={history} />
      <AnimeDetails {...anime} />
    </div>
  );
}

export default PageDetail;
