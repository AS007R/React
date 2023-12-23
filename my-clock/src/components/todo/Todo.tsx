import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import Welcome from "./Welcome";
import { TodoItemsContext } from "../../store/TodoItemsContext";
type typeTodo = {
  name: string;
  dueDate: string;
};
function Todo() {
  const [todoItems, setTodoItems] = useState<typeTodo[]>([]);
  const addNewItem = (todoName: string, todoDate: string) => {
    setTodoItems((currnItems) => [
      { name: todoName, dueDate: todoDate },
      ...currnItems,
    ]);
  };
  const deleteItem = (todoName: string) => {
    const newItems = todoItems.filter(
      (item: typeTodo) => item.name !== todoName
    );
    setTodoItems(newItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{ todoItems, deleteItem, addNewItem }}>
        <h1 className="bg-primary-subtle py-2 fw-bold text-primary-emphasis ">
          My Todos
        </h1>
        <AddTodo />
        <Welcome />
        <TodoItems />
      </TodoItemsContext.Provider>
    </>
  );
}

export default Todo;
