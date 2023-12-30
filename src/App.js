import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import '../src/Pro.css'
import Home from "./component/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from "./component/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
