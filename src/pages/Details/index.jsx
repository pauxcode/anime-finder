import React, { useContext } from "react";
import AnimesContext from "context/AnimesContext";
import Anime from "components/Anime";

function Detail({ match, history }) {
  const { animes, topAnimes } = useContext(AnimesContext);

  if (topAnimes.length >= 1) {
    const anime = topAnimes.find(
      // eslint-disable-next-line
      (singleAnime) => singleAnime.mal_id == match.params.id
    );
    function handleClick() {
      history.goBack();
    }
    return (
      <div>
        <button className="back" onClick={handleClick}>
          Back
        </button>
        <Anime {...anime} />
      </div>
    );
  } else if (animes.length >= 1) {
    const anime = animes.find(
      // eslint-disable-next-line
      (singleAnime) => singleAnime.mal_id == match.params.id
    );

    function handleClick() {
      history.goBack();
    }
    return (
      <div>
        <button className="back" onClick={handleClick}>
          Back
        </button>
        <Anime {...anime} />
      </div>
    );
  }
  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <button className="back" onClick={handleClick}>
        Back
      </button>
      <p>404 Anime don't find</p>;
    </div>
  );
}

export default Detail;
