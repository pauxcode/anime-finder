import React, { useState } from "react";

const Context = React.createContext({});

export function AnimesContextProvider({ children }) {
  const [animeSearched, setAnimeSearched] = useState([]);
  const [topAnimes, setTopAnimes] = useState([]);
  const [seasonAnimes, setSeasonAnimes] = useState([]);
  const [scheduleAnimes, setScheduleAnimes] = useState([])

  return (
    <Context.Provider
      value={{
        animeSearched,
        setAnimeSearched,
        topAnimes,
        setTopAnimes,
        seasonAnimes,
        setSeasonAnimes,
        scheduleAnimes,
        setScheduleAnimes
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
