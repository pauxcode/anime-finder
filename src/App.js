import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Detail from "./pages/Details";
import { AnimesContextProvider } from "./context/AnimesContext";

function App() {
  return (
    <Router>
      <Switch>
        <AnimesContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/anime/:id" component={Detail} />
        </AnimesContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
