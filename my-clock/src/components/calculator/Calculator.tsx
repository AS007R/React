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
  ];
  return (
    <div className={styles.calc}>
      <div>
        <p className={styles.display}></p>
      </div>
      <div className="d-flex flex-row justify-content-center flex-wrap    ">
        {btnText.map((item) => (
          <button className={styles.btnCalc}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
