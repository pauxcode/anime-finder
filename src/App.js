import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import AnimeList from "./Components/Anime-List";
import Header from "./Components/Header";
import AnimePage from "./Components/Anime-Page";
// import Search from "./Components/Search";
import Prueba from "./Components/Prueba";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/top">
          <AnimeList />
        </Route>
        <Route path="/anime/search" component={Prueba} />
        <Route path="/anime/:id" component={AnimePage} />
      </Switch>
    </Router>
  );
}

export default App;
