const Time = () => {
  const currTime = new Date();
  return (
    <p>
      The current time is:{" "}
      <span className="text-danger-emphasis fw-bold ">
        {currTime.toLocaleDateString()} -- {currTime.toLocaleTimeString()}
      </span>
    </p>
  );
};

export default Time;
