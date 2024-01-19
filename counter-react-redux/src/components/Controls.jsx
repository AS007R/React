import { useRef } from "react";
import { useDispatch } from "react-redux";
import { privacyActions } from "../store/privacy";
import { counterAction } from "../store/counter";

const Controls = () => {
  const dispach = useDispatch();
  const inputElem = useRef();

  const handleInc = () => {
    dispach(counterAction.increment());
  };
  const handleDec = () => {
    dispach(counterAction.decrement());
  };
  const handleAdd = () => {
    dispach(counterAction.add(inputElem.current.value));
    inputElem.current.value = "";
  };
  const handleSub = () => {
    dispach(counterAction.subtract(inputElem.current.value));
    inputElem.current.value = "";
  };
  const handlePvc = () => {
    dispach(privacyActions.toggle());
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleInc}
          className="btn btn-primary mx-1 "
        >
          +1
        </button>

        <button
          type="button"
          onClick={handleDec}
          className="btn btn-success mx-1"
        >
          -1
        </button>
        <button
          type="button"
          onClick={handlePvc}
          className="btn btn-warning mx-1"
        >
          Privacy Toggle
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-info mx-1 "
        >
          Add
        </button>
        <input
          type="text"
          ref={inputElem}
          placeholder="Enter Number"
          className="input_width"
        />

        <button
          type="button"
          onClick={handleSub}
          className="btn btn-danger mx-1"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
