import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextBadli" />
      <div className="container-sm my-3">
        <TextForm heading="Enter the text to convert below" />
      </div>
    </>
  );
}

export default App;
