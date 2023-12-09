import { useContext } from "react";
import { HealthyFoodContext } from "../../store/HealthyFoodContext";

function ShowFoods() {
  const { foods, bought, onClickHandle } = useContext(HealthyFoodContext);
  return (
    <>
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
    </>
  );
}

export default ShowFoods;
