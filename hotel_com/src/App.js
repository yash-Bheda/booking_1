import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../src/Pro.css'
import Home from "./component/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from "./component/About";
import Contact from "./component/Contact";
import Gallary from "./component/Gallary";
import Menu from "./component/Menu";

import menu1 from '../src/Json/Menu.json'
import Booktable from "./component/Booktable.js";
import Footer from "./component/Footer.js";
import Login from "./component/Login.js";
import Register from "./component/Register.js";



function App() {


  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Login/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/booktable" element={<Booktable/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Gallary" element={<Gallary/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
