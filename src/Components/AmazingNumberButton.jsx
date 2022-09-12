import React from "react";
import "./Styles/AmazingNumberButton.css";

function AmazingNumberButton({ number, handleNumbers }) {

  return (
    <button onClick={(e) => {
        handleNumbers(number)
    }}>{number}</button>
  );
}

export default AmazingNumberButton;
