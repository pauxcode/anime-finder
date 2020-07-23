import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputSearchStyled } from "./styles";

function InputSearch() {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <InputSearchStyled>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a anime here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
    </InputSearchStyled>
  );
}

export default InputSearch;
