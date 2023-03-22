import React, { useState, useEffect } from 'react';

function Timer2() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes,setMinutes]=useState(0);
  const [hours,setHours]=useState(0);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  if(timer===60){
    setTimer(0);
    setMinutes(minutes=>minutes+1)
    console.log("minutos:", minutes);
  }
  if(minutes===60){
    setMinutes(0);
    setHours(hours=>hours+1)
  }
  if(hours===24){
    resetTimer()
  }

  const tick = () => {
    setTimer(prevTimer => prevTimer + 1);
  };

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setMinutes(0);
    setHours(0);
    setRunning(false);
  };

  return (
    <div className='cronometro'>
      <div>Timer:{hours}h {minutes}m {timer}s</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer2;