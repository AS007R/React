import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";


function App() {
  return (
    <div>
    <Navbar title= "My Todos List" searchBar={false}/>
    <Todos/>
    <Footer/>
    </div>
  );
}

export default App;
