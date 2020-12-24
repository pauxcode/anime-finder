import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import PageHome from "pages/home";
import PageTop from 'pages/top'
import PageSeason from "pages/season";
import PageSchedule from 'pages/schedule'
import PageSearch from "./pages/search";
import PageDetails from "./pages/details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/top/:type/:subType?" component={PageTop} />
        <Route exact path="/season/:year?/:season?" component={PageSeason} />
        <Route exact path='/schedule/:day?' component={PageSchedule} />
        <Route path="/search/:keyword/:rated?" component={PageSearch} />
        <Route exact path="/details/:type/:id" component={PageDetails} />
      </Switch>
    </Router>
  );
}

export default App;