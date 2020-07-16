import React, { useContext } from "react";
import AnimesContext from "../../context/AnimesContext";

function Detail({ params }) {
  console.log(params);
  const animesContext = useContext(AnimesContext);
  console.log(animesContext);
  return (
    <div>
      <h2>Anime con ID: </h2>
    </div>
  );
}

export default Detail;
