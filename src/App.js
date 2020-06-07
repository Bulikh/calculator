import React, { useState } from "react";
import Buttons from './components/Buttons';
import Output from './components/Output';
import "./App.css";

function App() {
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("0");

  const handleReset = () => {
    setCurValue("0");
    setPrevValue("");
  };
  const handleOperator = e => {
    if (curValue === "0" && e.target.value === "-") {
      setCurValue(e.target.value);
      return;
    }
    if (
      (prevValue[prevValue.length - 1] === "+" ||
        prevValue[prevValue.length - 1] === "-" ||
        prevValue[prevValue.length - 1] === "*" ||
        prevValue[prevValue.length - 1] === "/") &&
      curValue === "" &&
      e.target.value !== "-"
    ) {
      //if(prevValue[prevValue.length-1])
      let newVal = prevValue.slice(0, 1);
      setPrevValue(newVal + e.target.value + curValue);
      setCurValue("");
    } else {
      setPrevValue(prevValue + curValue + e.target.value);
      setCurValue("");
    }
  };
  const handleClickNumber = e => {
    if (curValue.length > 15) {
      return;
    }
    if (e.target.value === "0" && curValue === "0") {
      return;
    }
    if (e.target.value === ".") {
      if (
        curValue[curValue.length - 1] === "." ||
        curValue.split("").includes(".")
      ) {
        return;
      }
      if (curValue === "0") {
        return;
      }
    }
    if (curValue !== "0") {
      setCurValue(curValue + e.target.value);
    } else {
      setCurValue(e.target.value);
    }
  };
  const evalHandler = () => {
    if (String(eval(prevValue + curValue)).length > 6) {
      setCurValue(eval(prevValue + curValue).toFixed(4));
      return;
    }
    setCurValue(eval(prevValue + curValue));
    setPrevValue("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <Output prev={prevValue} current={curValue} />
        <div className="buttons-container">
          <Buttons
            onhandleClickNumber={handleClickNumber}
            onHandleReset={handleReset}
            onHandleOperator={handleOperator}
            onEvalHandler={evalHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
