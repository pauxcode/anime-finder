import React from "react";

function ButtonBack({ history }) {
  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <button className="back" onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default ButtonBack;
