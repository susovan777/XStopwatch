import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0); // setting intial time
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    // if timer is running then increase timer by 1
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    } else clearInterval(intervalId);

    const updateTime = () => clearInterval(intervalId);

    return updateTime;
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    if (isRunning) {
      setTime(0);
      setIsRunning(false);
    } else setTime(0);
  };

  let min = Math.floor((time % 6000) / 60);
  let sec = time % 60;
  // console.log(time*1000)

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time: {min}:{sec < 10 ? "0" : ""}
        {sec}
      </p>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
