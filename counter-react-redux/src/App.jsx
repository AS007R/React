import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Controls from "./components/Controls";

function App() {
  return (
    <center className="my-5   ">
      <div className="card card-width">
        <div className="card-body">
          <Header />
          <Display />
          <Controls />
        </div>
      </div>
    </center>
  );
}

export default App;
