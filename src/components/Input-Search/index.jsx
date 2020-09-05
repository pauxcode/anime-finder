import React from "react";
import { useHistory } from "react-router-dom";
import { InputSearchStyled } from "./styles";
import useForm from "../../hooks/updateParams";

function InputSearch({ initialKeyword = "" }) {
  /* initialKeyword will be undefined until a search is done */
  const { keyword, updateKeyword } = useForm({
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
    <InputSearchStyled>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a anime here..."
          onChange={handleChange}
          type="text"
          value={keywordValue}
        />
      </form>
    </InputSearchStyled>
  );
}

export default InputSearch;
