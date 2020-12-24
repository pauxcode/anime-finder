import styled from "styled-components";

export const DetailsStyled = styled.main`
  background: var(--white);
  display: grid;
  grid-template-areas:
        "cover"
        "title"
        "status"
        "synopsis"
        "background"
        "title-genres"
        "genres"
        "title-openings"
        "openings"
        "title-endings"
        "endings";

  div.status, details.synopsis, details.background, h3.title-genres, h3.title-openings, h3.title-endings {
    margin-top: 10px;
  }
  div.genres, ul {
    margin-top: 5px;
  }

  h1 {
    grid-area: title;
  }

  div.status {
    grid-area: status;
  }

  details.synopsis {
    grid-area: synopsis;
  }
  details.background {
    grid-area: background;
  }

  h3.title-genres {
    grid-area: title-genres;
  }
  div.genres {
    grid-area: genres;
    display: grid;
    grid-template-columns: repeat(auto-fill, 92px);
    gap: 5px;
  }
  div.genres span {
    padding: 5px;
    font-size: 15px;
    width: 100%;
    text-align: center;
    background: var(--white);
    border: 0.5px solid var(--black);
    border-radius: 5px;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  }

  ul {
    padding-left: 20px;
  }
  ul li {
    margin-bottom: 5px;
  }

  h3.title-openings {
    grid-area: title-openings;
  }
  ul.openings {
    grid-area: openings;
  }

  h3.title-endings {
    grid-area: title-endings;
  }
  ul.endings {
    grid-area: endings;
  }

  div.cover.trailer-video {
    grid-area: cover;
    height: 200px;
  }
  h3.title-trailer, div.cover.image {
    display: none;
  }

  div.cover.image-manga {
    grid-area: cover;
    display: initial;
    display: flex;
    justify-content: center;
  }
  
  iframe {
    width: 100%;
    height: 100%;
  }


  // Media Queries
  @media (min-width: 375px) {
    div.genres {
      grid-template-columns: repeat(auto-fill, 100px);
    }
  }
  @media (min-width: 768px) {
    grid-template-areas:
        "cover"
        "title"
        "status"
        "synopsis"
        "background"
        "title-genres"
        "genres"
        "title-openings"
        "openings"
        "title-endings"
        "endings"
        "title-trailer"
        "video";

    div.cover.image {
      display: flex;
      justify-content: center;
    }
    div.status {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    h3.title-trailer {
      grid-area: title-trailer;
      display: initial;
    }
    div.cover.trailer-video {
      width: 50%;
      height: 350px;
      grid-area: video;
    }
  }
`;