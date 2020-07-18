import React, { useState } from "react";

const Context = React.createContext({});

export function AnimesContextProvider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [topAnimes, setTopAnimes] = useState([]);

  return (
    <Context.Provider value={{ animes, setAnimes, topAnimes, setTopAnimes }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
