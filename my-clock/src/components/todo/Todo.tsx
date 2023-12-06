import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import Welcome from "./Welcome";

function Todo() {
  const todoItemsI: any[] = [];

  const [todoItems, setTodoItems] = useState(todoItemsI);
  const handleAddItem = (todoName: string, todoDate: string) => {
    const newItems = [...todoItems, { name: todoName, dueDate: todoDate }];
    setTodoItems(newItems);
  };
  const handleDelete = (todoName: string) => {
    const newItems = todoItems.filter(
      (item: { name: string; dueDate: string }) => item.name !== todoName
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
