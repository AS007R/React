import { useContext } from "react";
import { HealthyFoodContext } from "../../store/HealthyFoodContext";
import styles from "../HealthyFood.module.css";

const AddFood = () => {
  const { onkeyHandle } = useContext(HealthyFoodContext);

  return (
    <div>
      <input
        className={styles.inputCss}
        type="text"
        placeholder="Enter Healthy Food here"
        onKeyDown={onkeyHandle}
      />
    </div>
  );
};

export default AddFood;
