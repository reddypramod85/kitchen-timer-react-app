import React, { useState, useEffect } from 'react';
import './App.css';

/*
Problem Statement
Build a kitchen timer appUI should have:
- Time display
- 3 time buttons (1 second, 10 seconds, 1 minute)
- start/stop button
- reset buttonTime starts at 0
Clicking the time buttons adds that amount of time to this value (i.e clicking 10 seconds 4x, and 1 second 5x, the clock will read 45 seconds)
Clicking start will start the time counting down toward 0, each second losing a second from the display
stop will pause the countdown
reset will stop any countdown and reset the time to 0*/

let timer;

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const addSeconds = (e) => {
    setTime(time + Number(e.target.value));
  };

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      if (time > 0 && start) {
        setTime((t) => t - 1);
      } else {
        setStart(false);
      }
    }, 1000);
  }, [time, start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <label>Clock Time</label>
      <label role="timer">{time}</label>
      <button value="1" onClick={addSeconds}>
        1 second
      </button>
      <button value="10" onClick={addSeconds}>
        10 seconds
      </button>
      <button value="60" onClick={addSeconds}>
        1 minute
      </button>
      {!start && <button onClick={handleStart}>start</button>}
      {start && <button onClick={handleStop}>stop</button>}
      <button value="0" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}

export default App;
