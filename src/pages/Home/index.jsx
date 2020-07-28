import React from "react";

// import useAnimes from "hooks/useAnimes";
import Header from "components/Header";
import CardCategory from "components/Card-Category";

// import ListOfAnimes from "components/ListOfAnimes";

function Home() {
  // const { loading, animes } = useAnimes();
  // const { animes } = useAnimes();

  return (
    <div>
      <Header />
      <span>
        For a better experience enter this app on a cell phone. It will soon be
        adapted to any screen. Thank for you understanding.
      </span>
      <br />
      <span>
        *Some searches may not return results because there is a problem with
        the API.
      </span>
      <section>
        <CardCategory
          title="Top Anime"
          description="Animes best value for the community (Alpha)"
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
      {/* <Seasons /> */}
      {/* <ListOfAnimes animes={animes} /> */}
    </div>
  );
}

export default Home;
