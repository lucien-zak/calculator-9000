import React from "react";
import "./Styles/GreatOperationButton.css";

function GreatOperationButton({ screenState, operator, handleOperators }) {
  return (
    <button
      disabled={screenState.display === 0 ? "disabled" : ""}
      onClick={() => {
        handleOperators(operator);
      }}
    >
      {operator}
    </button>
  );
}

export default GreatOperationButton;
