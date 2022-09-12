import React from "react";
import BeautifulScreen from "./BeautifulScreen";
import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import "./Styles/Calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <TheTitle />
      <BeautifulScreen/>
      <AmazingNumberButton />
      <GreatOperationButton />
      <MagnificientEqualButton/>
    </div>
  );
}

export default Calculator;
