import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slogan from "./components/Slogan";
import Time from "./components/Time";
import ClockHeading from "./components/ClockHeading";
import HealthyFood from "./components/HealthyFood";
import Todo from "./components/todo/Todo";
import Calculator from "./components/calculator/calculator";
function App() {
  return (
    <>
      <ClockHeading />
      <Slogan />
      <Time />
      <hr className="my-5" />
      <HealthyFood />
      <hr className="my-5" />
      <Todo />
      <hr className="my-5" />

      <Calculator />

      <hr className="my-5" />
    </>
  );
}

export default App;
