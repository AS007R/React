import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

function Todo() {
  const todoItems = [
    {
      name: "Project",
      dueDate: "12/12/2023",
    },
    {
      name: "Water",
      dueDate: "12/12/2023",
    },
    {
      name: "Milk",
      dueDate: "12/12/2023",
    },
    {
      name: "Yogurt",
      dueDate: "12/12/2023",
    },
  ];
  return (
    <>
      <h1 className="bg-primary-subtle py-2 fw-bold text-primary-emphasis ">
        My Todos
      </h1>
      <AddTodo />
      <TodoItems todoList={todoItems} />
    </>
  );
}

export default Todo;
