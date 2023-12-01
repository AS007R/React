import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slogan from "./components/Slogan";
import Time from "./components/Time";
import ClockHeading from "./components/ClockHeading";
import HealthyFood from "./components/HealthyFood";
function App() {
  return (
    <>
      <ClockHeading />
      <Slogan />
      <Time />
      <hr className="my-5" />
      <HealthyFood />
      <hr className="my-5" />
    </>
  );
}

export default App;
