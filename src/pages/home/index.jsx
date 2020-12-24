import React from "react";

import { HeadProvider, Title, Meta } from "react-head";

import Header from "components/Header";
import Wrapper from "components/Wrapper";
import { HomeStyled } from "./styles";
import CardHome from "components/CardHome";
import Footer from "components/Footer";

function PageHome() {
  return (
    <>
      <HeadProvider>
        <Title>Home || Anime Finder</Title>
        <Meta
          name="description"
          content="Anime Finder is the site where you can find information about your favorite anime and more"
        />
      </HeadProvider>

      <Header />

      <Wrapper>
        <HomeStyled>
          <CardHome
            title="Top Animes"
            description="Animes best rated by the community"
            link="/top/anime"
          />
          <CardHome
            title="Top Mangas"
            description="Mangas best rated by the community "
            link="/top/manga"
          />
          <CardHome
            title="Schedule Animes"
            description="Anime schedule of the week or specified day"
            link="/schedule"
          />
          <CardHome
            title="Season Animes"
            description="Animes this season"
            link="/season"
          />
        </HomeStyled>
      </Wrapper>

      <Footer />

      {/* <!-- Message of instalation --> */}
      {/* <PromptStyled>
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
      </PromptStyled> */}
    </>
  );
}
export default PageHome;