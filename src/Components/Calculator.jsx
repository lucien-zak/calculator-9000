import React, { useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import "./Styles/Calculator.css";

function Calculator() {
  const operators = ["+", "-", "*", "/"];
  const [screenState, setScreenState] = useState({
    display: 0,
    operator: "",
    results: "",
    total: 0,
  });

  const handleNumbers = (number) => {
    if (screenState.display === 0) {
      setScreenState({ ...screenState, display: number, operator: "" });
    } else {
      setScreenState({
        ...screenState,
        display: screenState.display.toString() + number.toString(),
      });
    }
  };

  const handleOperators = (operator) => {
    if (screenState.operator === "=") {
      setScreenState({
        ...screenState,
        operator: operator,
        results: screenState.display + operator,
        display: 0,
      });
    } else {
      setScreenState({
        operator: operator,
        results:
          screenState.results.toString() + screenState.display + operator,
        display: 0,
        total: eval(screenState.results + screenState.display),
      });
    }
  };

  const handleEqual = () => {
    setScreenState({
      operator: "=",
      display: eval(screenState.results + screenState.display),
      total: eval(screenState.results + screenState.display),
      results:
        screenState.results.toString() +
        screenState.display +
        "=" +
        eval(screenState.results + screenState.display),
    });
  };

  const clearData = () => {
    setScreenState({
      display: 0,
      operator: "",
      results: "",
      total: 0,
    });
  }

  return (
    <div className="calculator">
      <TheTitle />
      <BeautifulScreen screenState={screenState} />
      <div className="Keyboard">
        <div className="AmazingNumberButton">
          {Array(9)
            .fill("")
            .map((_, index) => {
              return (
                <AmazingNumberButton
                  handleNumbers={handleNumbers}
                  key={index}
                  number={index + 1}
                />
              );
            })}
          <AmazingNumberButton number={"."} handleNumbers={handleNumbers} />
          <AmazingNumberButton number={0} handleNumbers={handleNumbers} />
          <button style={{backgroundColor: "red"}} onClick={clearData}>C</button>
        </div>
        <div className="GreatOperationButton">
          {operators.map((operator) => {
            return (
              <GreatOperationButton
                handleOperators={handleOperators}
                key={operator}
                operator={operator}
              />
            );
          })}
        </div>
      </div>
      <MagnificientEqualButton
            screenState={screenState}
            handleEqual={handleEqual}
          />

    </div>
  );
}

export default Calculator;
