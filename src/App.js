import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
