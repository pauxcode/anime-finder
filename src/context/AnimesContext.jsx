import React, { useState } from "react";

const Context = React.createContext({});

export function AnimesContextProvider({ children }) {
  const [animes, setAnimes] = useState([]);

  return (
    <Context.Provider value={{ animes, setAnimes }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
