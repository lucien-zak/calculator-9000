/* eslint no-eval: 0 */
import React, { useEffect, useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import "./Styles/Calculator.css";
import SuperTable from "./SuperTable";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function Calculator() {
  const operators = ["+", "-", "*", "/"];
  const [screenState, setScreenState] = useState({
    display: 0,
    operator: "",
    results: "",
    total: 0,
  });
  const [saveState, setSaveState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDatas() {
      const datas = await fetch("getOperations.php");
      const response = await datas.json();
      setData(response);
    }
    getDatas();
  }, [saveState, deleteState]);

  const handleNumbers = (number) => {
    setSaveState(false);
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
      results: screenState.results.toString() + screenState.display + "=",
    });
  };

  const clearData = () => {
    setScreenState({
      display: 0,
      operator: "",
      results: "",
      total: 0,
    });
  };

  const saveData = async () => {
    if (saveState === true) {
      Notify.failure("Calcul déjà sauvegardé :)");
    } else {
      await fetch("save.php", {
        method: "POST",
        body: JSON.stringify({ screenState }),
      });
      Notify.success("Calcul sauvegardé :)");
    }
    setSaveState(true);
  };

  return (
    <div className="calculator">
      <TheTitle screenState={screenState} />
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
          {/* <AmazingNumberButton number={"."}  handleNumbers={handleNumbers} /> */}
          <button
            disabled={
              screenState.display.toString().includes(".") ? "disabled" : ""
            }
            onClick={() => {
              handleNumbers(".");
            }}
          >
            .
          </button>
          <AmazingNumberButton number={0} handleNumbers={handleNumbers} />
          <button style={{ backgroundColor: "red" }} onClick={clearData}>
            C
          </button>
        </div>
        <div className="GreatOperationButton">
          {operators.map((operator) => {
            return (
              <GreatOperationButton
                screenState={screenState}
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
      <button
        disabled={screenState.operator === "=" ? "" : "disabled"}
        onClick={saveData}
      >
        Save
      </button>
      {data.length > 0 && (
        <SuperTable
          deleteState={deleteState}
          setDeleteState={setDeleteState}
          data={data}
        />
      )}
      {/* <table>
        <thead>
            <tr>
                <th>Calcul</th>
                <th>Résultat</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.operations.replace('=','')}</td>
                        <td>{item.results}</td>
                    </tr>
                )
            })}
        </tbody>
      </table> */}
    </div>
  );
}

export default Calculator;
