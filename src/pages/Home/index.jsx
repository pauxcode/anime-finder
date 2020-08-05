import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

import Header from "components/Header";
import CardCategory from "components/Card-Category";

function Home() {
  return (
    <div>
      <Header />
      <HeadProvider>
        <Title>Home || Anime Finder</Title>
        <Meta
          name="description"
          content="Anime Finder is the site where you can find information about your favorite anime and more"
        />
      </HeadProvider>
      <section>
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
          title="Page in Blanck"
          description="Nothingt. Not enter"
        />
        <CardCategory
          title="Page in Blanck"
          description="Nothingt. Not enter"
        />
      </section>
    </div>
  );
}

export default Home;
