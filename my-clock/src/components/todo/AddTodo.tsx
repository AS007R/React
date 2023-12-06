import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = (event: any) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setTodoDate(event.target.value);
  };

  const handleAdd = () => {
    onAddTodo(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 border p-2 ">
            <input
              type="text"
              className="form-control"
              placeholder="Todo tittle"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4 border item-center  p-2 ">
            <input
              className="w-100 h-100 "
              type="date"
              value={todoDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-3 border p-2 ">
            <button
              type="button"
              className="btn btn-primary  btn-width "
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
