import logo from'../logo.png'
import {Link, useNavigate} from 'react-router-dom'
// import { Navbar, Nav } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import Login from './Login';




function Navbarr() {

  const Navigate=useNavigate();

  function log()
  {
    Navigate('/login')

  }
 
  return (
    <div className=''>
  <nav className='navbar navbar-expand-lg navbarconpo  navmain  '>

<img src={logo} className='p-3 ms-5 ' />



      <button className="navbar-toggler bg-light me-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>

  </button>



 
  <div className=' collapse navbar-collapse  navbarpagae  'id="navbarNav">



  <div className='d-flex  justify-content-center    ' >




  


<ul className='list-inline navbar-nav p-4 '>

  
  <li className='list-inline-item fs-3 ms-3  '><Link to="/" className='home p-1  '>HOME</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link to="/Menu"className='linkhover p-1'>MENU</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link  to="/about"className='linkhover p-1'>ABOUT </Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link to='/Gallary' className='linkhover p-1'>Gallary</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link to='/booktable'className='linkhover p-1'>Book Table</Link></li>
  <li  className='list-inline-item fs-3 ms-2 me-5'><Link  to="/Contact"className='linkhover p-1'>CONTACT</Link></li>
  <li  className='list-inline-item ' ><button className='btn bg-primary text-white' onClick={log}>Login</button></li>


</ul> 

</div>




</div>



</nav>



    </div>
   )
}



{/* <div>
    
        
<nav className=''>
  <div className='bg-light pt-2 navmain'>
<img src={logo} className='p-3 ms-5 ' />


  <div className='d-flex  float-end navbar   '>



  


<ul className='list-inline  p-4 '>
  
  <li className='list-inline-item fs-3 ms-3 '><Link to="/" className='home p-1  '>HOME</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link to="/Menu"className='linkhover p-1'>MENU</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link  to="/about"className='linkhover p-1'>ABOUT </Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link to='/Gallary' className='linkhover p-1'>Gallary</Link></li>
  <li  className='list-inline-item fs-3 ms-3'><Link className='linkhover p-1'>CHEF</Link></li>
  <li  className='list-inline-item fs-3 ms-2 me-5'><Link  to="/Contact"className='linkhover p-1'>CONTACT</Link></li>



</ul> 
</div>



</div>


</nav>


</div>
 */}

export default Navbarr

{/* <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">
<img src={logo} className='p-3 ms-5 ' />

</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto fs-2">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/menu">Menu</Nav.Link>
    <Nav.Link href="/Gallary">Gallary</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  */}
