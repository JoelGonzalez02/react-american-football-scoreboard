import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {

  
const [quarter, setQuarter] = useState(1);

const changeQuarter = (e) => {
  setQuarter(quarter + 1);
};


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Home Timeouts</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Away Timeouts</h3>
        <div className="toGo__value">3</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Shot Clock</h3>
        <div className="ballOn__value">24</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
  <div className="quarter__value">{quarter}</div>
  <button className ="newQuarter" onClick = {changeQuarter}>Change Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
