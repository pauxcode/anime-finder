import React, { useState } from "react";

const Context = React.createContext({});

export function AnimesContextProvider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [topAnimes, setTopAnimes] = useState([]);
  const [seasonAnimes, setSeasonAnimes] = useState([]);

  const [checkedCategory, setCheckedCategory] = useState("");

  return (
    <Context.Provider
      value={{
        animes,
        setAnimes,
        topAnimes,
        setTopAnimes,
        checkedCategory,
        setCheckedCategory,
        seasonAnimes,
        setSeasonAnimes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
