"use client";
import { useState } from "react";
const HealthyFood = () => {
  const [show, setShow] = useState(true);

  const foods: string[] = ["Green Vegitables", "Rice", "Milk", "Salad", "Dal"];
  function clickHealth() {
    setShow(!show);
  }

  return (
    <>
      <h1
        className="fw-bold "
        style={{ cursor: "pointer" }}
        onClick={clickHealth}
      >
        Healthy Foods
      </h1>
      {show ? (
        <ul className="list-group">
          {foods.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>Want to see Healty Foods</p>
      )}
    </>
  );
};

export default HealthyFood;
