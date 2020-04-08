//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [quarter, setQuarter] = useState(1);

const homeTD = (e) => {
  setHomeScore(homeScore + 7);
};

const homeFG = (e) => {
  setHomeScore(homeScore + 3);
};

const awayTD = (e) => {
  setAwayScore(awayScore + 7);
};

const awayFG = (e) => {
  setAwayScore(awayScore + 3);
};

const changeQuarter = (e) => {
  setQuarter(quarter + 1)
};

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
  <div className="quarter">{quarter}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{awayScore}</div>\
            </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {homeTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {homeFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {awayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {awayFG}>Away Field Goal</button>

          <button className="changeQuarter" onClick = {changeQuarter}>Change Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;


// stretch goal



import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function BasketBallApp() {
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [quarter, setQuarter] = useState(1);

const home2PT = (e) => {
  setHomeScore(homeScore + 2);
};

const home3PT = (e) => {
  setHomeScore(homeScore + 3);
};

const homeFT = (e) => {
  setHomeScore(homeScore + 1);
}

const away2PT = (e) => {
  setAwayScore(awayScore + 2);
};

const away3PT = (e) => {
  setAwayScore(awayScore + 3);
};

const awayFT = (e) => {
  setAwayScore(awayScore + 1);
};

const changeQuarter = (e) => {
  setQuarter(quarter + 1)
};

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lakers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Celtics</h2>
  <div className="away__score">{awayScore}</div>\
            </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__2pointer" onClick = {home2PT}>Home 2 pointer</button>
          <button className="homeButtons__3pointer" onClick = {home3PT}>Home 3 pointer</button>
          <button className="homeButtons__freethrow" onClick = {homeFT}>Home Freethrow</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__2pointer" onClick = {away2PT}>Away 2 pointer</button>
          <button className="awayButtons__3pointer" onClick = {away3PT}>Away 3 pointer</button>
          <button className="awayButons__freethrow" onClick = {awayFT}>Away Freethrow</button>

          <button className="changeQuarter" onClick = {changeQuarter}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}


export default BasketBallApp;
