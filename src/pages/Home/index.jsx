import React from "react";
import { useAnimes } from "../../hooks/useAnimes";

import ListTopOfAnimes from "../../components/ListTopOfAnimes/index";

function Home() {
  const { loading, animes } = useAnimes();
  return (
    <div>
      <h2>Home Page</h2>
      <p>Anything Here</p>
      <section>
        <ListTopOfAnimes animes={animes} />
      </section>
    </div>
  );
}

export default Home;
