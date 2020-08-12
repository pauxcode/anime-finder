import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

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
            name="description"
            content="Anime Finder is the site where you can find information about your favorite anime and more"
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
    </>
  );
}

export default Home;
