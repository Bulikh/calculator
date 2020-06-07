import React from 'react';

const Buttons = props => {
  return (
    <>
      <button onClick={props.onHandleReset} id="clear" value="AC">
        AC
      </button>
      <button onClick={props.onHandleOperator} id="divide" value="/">
        /
      </button>
      <button onClick={props.onHandleOperator} id="multiply" value="*">
        *
      </button>
      <button onClick={props.onHandleOperator} id="subtract" value="-">
        -
      </button>
      <button onClick={props.onhandleClickNumber} id="seven" value="7">
        7
      </button>
      <button onClick={props.onhandleClickNumber} id="eight" value="8">
        8
      </button>
      <button onClick={props.onhandleClickNumber} id="nine" value="9">
        9
      </button>
      <button onClick={props.onHandleOperator} id="add" value="+">
        +
      </button>
      <button onClick={props.onhandleClickNumber} id="four" value="4">
        4
      </button>
      <button onClick={props.onhandleClickNumber} id="five" value="5">
        5
      </button>
      <button onClick={props.onhandleClickNumber} id="six" value="6">
        6
      </button>
      <button onClick={props.onEvalHandler} id="equals" value="=">
        =
      </button>
      <button onClick={props.onhandleClickNumber} id="one" value="1">
        1
      </button>
      <button onClick={props.onhandleClickNumber} id="two" value="2">
        2
      </button>
      <button onClick={props.onhandleClickNumber} id="three" value="3">
        3
      </button>
      <button onClick={props.onhandleClickNumber} id="decimal" value=".">
        .
      </button>
      <button onClick={props.onhandleClickNumber} id="zero" value="0">
        0
      </button>
    </>
  );
};

export default Buttons;