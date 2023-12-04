type typeTodo = {
  name: string;
  dueDate: string;
};

type typeTodoProp = {
  todoList: typeTodo[];
};

function TodoItems({ todoList }: typeTodoProp) {
  return (
    <>
      {todoList.map((item: typeTodo) => (
        <div key={item.name} className="container">
          <div className="row">
            <div className="col-5 border text-start px-4  p-2 ">
              {item.name}
            </div>
            <div className="col-4 border text-start  p-2 ">{item.dueDate}</div>
            <div className="col-3 border p-2 ">
              <button type="button" className="btn btn-danger  btn-width ">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
