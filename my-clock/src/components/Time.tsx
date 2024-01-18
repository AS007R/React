import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <p>
      The current time is:{" "}
      <span className="text-danger-emphasis fw-bold ">
        {time.toLocaleDateString()} -- {time.toLocaleTimeString()}
      </span>
    </p>
  );
};

export default Time;
