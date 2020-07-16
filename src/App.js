import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home/index";
import AnimeList from "./pages/Top-Anime/Anime-List";
import Header from "./components/Header/index";
import AnimePage from "./pages/Anime/Anime-Page";
// import Search from "./Components/Search";
import Prueba from "./components/Prueba";
import { AnimesContextProvider } from "./context/AnimesContext";
import Detail from "./pages/Details/index";

function App() {
  return (
    <Router>
      <Switch>
        <AnimesContextProvider>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/prueba">
            <Header />
          </Route>
          <Route path="/top/anime">
            <Header />
            <AnimeList />
          </Route>
          <Route path="/search/anime">
            <Header />
            <Prueba />
          </Route>
          {/* <Route path="/anime/:id" component={AnimePage} /> */}
          <Route path="/anime/:id">
            <Detail />
          </Route>
        </AnimesContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
