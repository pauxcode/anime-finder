import React from "react";
import { useHistory } from "react-router-dom";
import { InputSearchStyled } from "./styles";
import updateKeywords from "hooks/useForm";

function InputSearch({ initialKeyword }) {
  /* initialKeyword will be undefined until a search is done */
  const { keyword, updateKeyword } = updateKeywords({
    initialKeyword,
  });
  const keywordValue = keyword || "";
  /* Therefore "" will be its value */
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}/`);
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputSearchStyled
        placeholder="Search a anime here..."
        onChange={handleChange}
        type="text"
        value={keywordValue}
      />
    </form>
  );
}

export default InputSearch;