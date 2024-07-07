import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0); // setting intial time
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    // if timer is running then increase timer by 1
    if (isRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else clearInterval(intervalId);

    const updateTime = () => clearInterval(intervalId);

    return updateTime;
  }, [isRunning, time]);

  // function to start/stop the timer 
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // function to reset the timer
  const handleReset = () => {
    if (isRunning) {
      setTime(0);
      setIsRunning(false);
    } else setTime(0);
  };

  let min = Math.floor((time % 6000) / 60);
  let sec = time % 60;

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time: {min}:{sec <= 9 ? `0${sec}` : sec}
      </p>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
