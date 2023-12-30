import React from 'react'
import logo from'../logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <div>
        
        <nav className=''>
          <div className='bg-light pt-2 navmain'>
        <img src={logo} className='p-3 ms-5 ' />


          <div className='d-flex  float-end navbar   '>


          

        
        <ul className='list-inline  p-4 '>
          
          <li className='list-inline-item fs-3 ms-3 '><Link to="/" className='home p-1  '>HOME</Link></li>
          <li  className='list-inline-item fs-3 ms-3'><Link to=""className='linkhover p-1'>MENU</Link></li>
          <li  className='list-inline-item fs-3 ms-3'><Link  to="/about"className='linkhover p-1'>ABOUT </Link></li>
          <li  className='list-inline-item fs-3 ms-3'><Link className='linkhover p-1'>PAGE</Link></li>
          <li  className='list-inline-item fs-3 ms-3'><Link className='linkhover p-1'>CHEF</Link></li>
          <li  className='list-inline-item fs-3 ms-2 me-5'><Link className='linkhover p-1'>CONTACT</Link></li>
          
        </ul>
        </div>
        
        
</div>
      </nav>

     </div>
   

      </div>
  )
}

export default Navbar