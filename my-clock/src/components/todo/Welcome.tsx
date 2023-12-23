import { useContext } from "react";
import { TodoItemsContext } from "../../store/TodoItemsContext";

const Welcome = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.length === 0 && (
        <h1 className="fw-bold mt-5 ">Enjoy your day.</h1>
      )}
    </div>
  );
};

export default Welcome;
