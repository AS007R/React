"use client";
import { useState } from "react";
import styles from "./HealthyFood.module.css";
const HealthyFood = () => {
  const [foods, setFoods] = useState(["Green Vegitables", "Rice", "Milk"]);

  const onkeyHandle = (event: any) => {
    if (event.key === "Enter") {
      if (!foods.includes(event.target.value)) {
        const healthyFood = event.target.value;
        const newFood = [...foods, healthyFood];
        setFoods(newFood);
        event.target.value = "";
      } else {
        alert("Food already added!");
      }
    }
  };
  let arr: string[] = [];
  const [bought, setBought] = useState(arr);

  const onClickHandle = (item: string) => {
    if (!bought.includes(item)) {
      const newBought = [...bought, item];
      setBought(newBought);
    } else {
    }
  };

  return (
    <div className={styles.healthContainer}>
      <h1 className="fw-bold ">Healthy Foods</h1>
      <input
        className={styles.inputCss}
        type="text"
        placeholder="Enter Healthy Food here"
        onKeyDown={onkeyHandle}
      />
      <ul className="list-group">
        {foods.map((item) => (
          <li
            key={item}
            className={
              bought.includes(item)
                ? "list-group-item text-start active"
                : "list-group-item text-start disable"
            }
          >
            {item}
            <button
              type="button"
              className="btn btn-info float-end"
              onClick={() => onClickHandle(item)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthyFood;
