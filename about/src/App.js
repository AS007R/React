
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar title="About Us"/>
    <div className="container-sm my-3" >    
    <About/>

    </div>
    

    </>
  );
}

export default App;
