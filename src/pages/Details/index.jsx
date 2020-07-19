import React, { useContext } from "react";
import AnimesContext from "context/AnimesContext";
import AnimeDetails from "components/AnimeDetails";

function PageDetail({ match, history }) {
  const { animes, topAnimes, checkedCategory } = useContext(AnimesContext);
  console.log(checkedCategory);

  //TOP ANIME
  if (checkedCategory === "top-anime") {
    const topAnime = topAnimes.find(
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
        <AnimeDetails {...topAnime} />
      </div>
    );
  }
  //ANIME SEARCHED
  else if (checkedCategory === "search") {
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
        <AnimeDetails {...anime} />
      </div>
    );
  }
  //404 NOT FOUND
  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <button className="back" onClick={handleClick}>
        Back
      </button>
      <p>404 Anime don't find</p>
    </div>
  );
}

export default PageDetail;
