import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import Welcome from "./Welcome";
type typeTodo = {
  name: string;
  dueDate: string;
};
function Todo() {
  const [todoItems, setTodoItems] = useState<typeTodo[]>([]);
  const handleAddItem = (todoName: string, todoDate: string) => {
    setTodoItems((currnItems) => [
      { name: todoName, dueDate: todoDate },
      ...currnItems,
    ]);
  };
  const handleDelete = (todoName: string) => {
    const newItems = todoItems.filter(
      (item: typeTodo) => item.name !== todoName
    );
    setTodoItems(newItems);
  };

  return (
    <>
      <h1 className="bg-primary-subtle py-2 fw-bold text-primary-emphasis ">
        My Todos
      </h1>
      <AddTodo onAddTodo={handleAddItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoList={todoItems} onDeleteTodo={handleDelete} />
    </>
  );
}

export default Todo;
