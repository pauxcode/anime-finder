import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

// import * as buttonAdd from './buttonAdd'

// import styled from "styled-components";
import Wrapper from "components/Wrapper";
import { HomeStyled } from "./styles";
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
      <div id="prompt" class="prompt hide bg-light border-top">
        <div class="font-weight-bold">Add to Home screen</div>
        <small>This app can be installed in your home screen</small>
        <div class="text-right">
          <button
            id="buttonCancel"
            type="button"
            class="font-weight-bold text-muted btn-sm btn btn-link"
          >
            CANCEL
          </button>
          <button
            id="buttonAdd"
            type="button"
            class="font-weight-bold text-primary btn-sm btn btn-link"
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
