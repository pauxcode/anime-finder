import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Components
import Wrapper from "../../components/Wrapper";
import AnimeSelected from "../Details/Anime-Selected";

const AnimePageStyled = styled.div`
  background: var(--background);
`;

function AnimePage({ match, history }) {
  console.log(match);
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://api.jikan.moe/v3/anime/${match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnime(data);
      });
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  function handleClick() {
    history.goBack();
  }

  return (
    <AnimePageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i> Back
        </button>
        <AnimeSelected {...anime} />
      </Wrapper>
    </AnimePageStyled>
  );
}

export default AnimePage;
