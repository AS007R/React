import React from "react";
import useState from "react";

const Message = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  return (
    <React.Fragment>
      <a href="#" onClick={handleShow}>
        Want to buy a new car?
      </a>
      {show && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
};

export default message;
