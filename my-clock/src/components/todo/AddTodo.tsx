import { useRef } from "react";
type addTodoProp = {
  onAddTodo: (todoName: string, todoDate: string) => void;
};

function AddTodo({ onAddTodo }: addTodoProp) {
  const todoNameElement = useRef<HTMLInputElement>(null!);
  const dueDateElement = useRef<HTMLInputElement>(null!);

  const handleAdd = (event: any) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    todoNameElement.current.value = "";
    onAddTodo(todoName, todoDate);
  };
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleAdd}>
          <div className="row">
            <div className="col-5 border p-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Todo tittle"
                ref={todoNameElement}
              />
            </div>
            <div className="col-4 border item-center  p-2 ">
              <input
                className="w-100 h-100 "
                type="date"
                ref={dueDateElement}
              />
            </div>
            <div className="col-3 border p-2 ">
              <button className="btn btn-primary  btn-width ">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
