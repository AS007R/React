function AddTodo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 border p-2 ">
            <input
              type="text"
              className="form-control"
              placeholder="Todo tittle"
            />
          </div>
          <div className="col-4 border item-center  p-2 ">
            <input className="w-100 h-100 " type="date" />
          </div>
          <div className="col-3 border p-2 ">
            <button type="button" className="btn btn-primary  btn-width ">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
