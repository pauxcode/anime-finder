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
      <section>
        <CardCategory
          title="Top Anime"
          description="Animes best value for the community"
          link="/top/anime"
        />
        <CardCategory
          title="Season Anime"
          description="Animes this season"
          link="/algo"
        />
        <CardCategory title="Yolo Anime" description="lorem ipsum algo" />
        <CardCategory title="Yolo Anime" description="Lorem Impusn algo" />
      </section>
      {/* <Seasons /> */}
      {/* <ListOfAnimes animes={animes} /> */}
    </div>
  );
}

export default Home;
