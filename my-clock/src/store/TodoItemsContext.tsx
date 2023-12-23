import { createContext } from "react";
type item = {
  name: string;
  dueDate: string;
};
type contextType = {
  todoItems: item[];
  addNewItem: (todoName: string, todoDate: string) => void;
  deleteItem: (todoName: string) => void;
};

export const TodoItemsContext = createContext<contextType>({
  todoItems: [],
  addNewItem: (_todoName: string, _todoDate: string) => {},
  deleteItem: (_todoName: string) => {},
});
