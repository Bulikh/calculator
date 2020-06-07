import React from 'react';

const Output = props => {
    return(
      <div id="display">
        <div className="output-timeline">
          {props.prev}
        </div>
        <div className="current-result">
          {props.current}
        </div>
      </div>
    )
  }

  export default Output;
