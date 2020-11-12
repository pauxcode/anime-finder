import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import Wrapper from "components/Wrapper";
import { HomeStyled, PromptStyled } from "./styles";
import Header from "components/Header";
import CardCategory from "components/Card-Category";
import Footer from "components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <HeadProvider>
          <Title>Home || Anime Finder</Title>
          <Meta
            name="description"
            content="Anime Finder is the site where you can find information about your favorite anime and more"
          />
        </HeadProvider>
        <HomeStyled>
          <CardCategory
            title="Top Animes"
            description="Animes best rated by the community"
            link="/top/anime"
          />
          <CardCategory
            title="Top Mangas"
            description="Mangas best rated by the community "
            link="/top/manga"
          />
          <CardCategory
            title="Season Animes"
            description="Animes this season"
            link="/season/anime"
          />
          <CardCategory
            title="Schedule Animes"
            description="Anime schedule of the week or specified day"
            link="/schedule"
          />
        </HomeStyled>
      </Wrapper>
      <Footer />
      {/* <!-- Message of instalation --> */}
      <PromptStyled>
        <div id="prompt" className="prompt hide">
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
