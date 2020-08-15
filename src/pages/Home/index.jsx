import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

// import * as buttonAdd from './buttonAdd'

// import styled from "styled-components";
import Wrapper from "components/Wrapper";
import { HomeStyled, PromptStyled } from "./styles";
import Header from "components/Header";
import CardCategory from "components/Card-Category";
import Footer from "components/Footer";

function Home() {
  return (
    <>
      <Wrapper>
        <div className="header">
          <Header />
        </div>
        <HeadProvider>
          <Title>Home || Anime Finder</Title>
          <Meta
            content="Anime Finder is the site where you can find information about your favorite anime and more"
            name="description"
          />
        </HeadProvider>
        <HomeStyled>
          <CardCategory
            title="Top Anime"
            description="Animes best value for the community (Beta)"
            link="/top/anime"
          />
          <CardCategory
            title="Season Anime"
            description="Animes this season (Beta)"
            link="/season/anime"
          />
          <CardCategory
            title="Top Manga"
            description="Manga section soon"
            link="/soon"
          />
          <CardCategory
            title="Schedule section soon"
            description="Anime schedule of the week or specified day"
            link="/soon"
          />
        </HomeStyled>
      </Wrapper>
      <Footer />
      {/* <!-- Mensaje de Instalacion --> */}
      {/* <div id="prompt" className="prompt hide bg-light border-top"> */}
      <PromptStyled>
        <div id="prompt" className="prompt show">
          <h3>Add to Home screen</h3>
          <small>This app can be installed in your home screen</small>
          <div className="buttons">
            <button id="buttonCancel" type="button" className="btn btn-cancel">
              CANCEL
            </button>
            <button id="buttonAdd" type="button" className="btn btn-add">
              ADD
            </button>
          </div>
        </div>
      </PromptStyled>
    </>
  );
}

export default Home;
