import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const btnText = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "-",
    "+",
    "=",
  ];
  const [calVal, setCalVal] = useState("");
  const onClickHandle = (item: string) => {
    const newVal = calVal + item;
    if (item === "C") {
      setCalVal("");
    } else if (item === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      setCalVal(newVal);
    }
  };

  return (
    <div className={styles.calc}>
      <div>
        <input type="text" className={styles.display} readOnly value={calVal} />
      </div>
      <div className="d-flex flex-row justify-content-center flex-wrap    ">
        {btnText.map((item) => (
          <button
            key={item}
            className={styles.btnCalc}
            onClick={() => onClickHandle(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
