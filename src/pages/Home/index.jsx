import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAnimes from "../../hooks/useAnimes";
import ListOfAnimes from "../../components/ListOfAnimes";

function Home() {
  const [keyword, setKeyword] = useState("");

  const history = useHistory();

  const { loading, animes } = useAnimes();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
    console.log(keyword);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a anime here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <ListOfAnimes animes={animes} />
    </div>
  );
}

export default Home;
