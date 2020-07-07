import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AnimeStyled = styled.div`
  &:hover {
    border-radius: 0 0 5px 5px;
    border: 1px solid blue;
    border-top: none;
  }
  cursor: pointer;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  margin: 1em;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  img {
    display: block;
    margin: auto;
    height: 320px;
    width: 225px;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s border;
    background: var(--white);
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

export default function Anime({ title, image, type, score, id }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/anime/${id}`);
  }
  // console.log("El id de la imagen es", id);

  return (
    <AnimeStyled onClick={handleClick}>
      <img
        loading="lazy"
        src={image}
        alt={title}
        height="320px"
        width="225px"
      />
      <div className="details">
        <h2>Name: {title}</h2>
        <p>
          <strong>Type: </strong>
          {type}
        </p>
        <p>
          <strong>Score: </strong>
          {score}
        </p>
      </div>
    </AnimeStyled>
  );
}
