import React from "react";
import "./Styles/GreatOperationButton.css";

function GreatOperationButton({operator, handleOperators}) {

  return (
    <button onClick={()=> {
        handleOperators(operator)
    }}>{operator}</button>
  )
}

export default GreatOperationButton;
