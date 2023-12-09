"use client";
import { useState } from "react";
import styles from "./HealthyFood.module.css";
import AddFood from "./healthyFood/AddFood";
import ShowFoods from "./healthyFood/ShowFoods";
import { HealthyFoodContext } from "../store/HealthyFoodContext";

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
    <HealthyFoodContext.Provider
      value={{ foods, bought, onClickHandle, onkeyHandle }}
    >
      <div className={styles.healthContainer}>
        <h1 className="fw-bold ">Healthy Foods</h1>
        <AddFood></AddFood>
        <ShowFoods></ShowFoods>
      </div>
    </HealthyFoodContext.Provider>
  );
};

export default HealthyFood;
