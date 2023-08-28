import * as React from 'react';
import { Button } from "../UI/Button/index";

const Timer = () => {
  const [timer, setTimer] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const firstStart = React.useRef(true);
  const count = React.useRef();

  React.useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      count.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(count.current);
    }
    return () => clearInterval(count.current);
  }, [start])
  
  // 4 hours 10 minutes and 0 seconds
  const handleOnClickStart = (isStart: boolean) => setStart(isStart);
  const dispSecondAsMinsHr = (seconds: number) => {
    const remainderSec = seconds % 60;
    const min = Math.floor(seconds / 60);
    const remainderMin = min % 60;
    const hr = Math.floor(min / 60);
    return `${hr.toString()}: ${remainderMin.toString()} : ${remainderSec.toString() }`
  };
  return (
    <div>
      <div className="my-3 ext-lg">
        {dispSecondAsMinsHr(timer)}
      </div>
      <div className="flex justify-between w-full">
          <div className="mr-6"><Button  onClick={()=>handleOnClickStart(true)}>Start</Button></div>
          <Button isSecondary onClick={()=>handleOnClickStart(false)}>Stop</Button>
        </div>
    </div>
  )
}

export default Timer;