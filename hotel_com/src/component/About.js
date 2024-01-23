import React from 'react'
import Navbar from './Navbar'
import about1 from '../img/About1.jpg'
import Footer from './Footer'

function About() {
  return (
   
        <div className='about'>
             <div className='navbarpagae'>

<Navbar/>

    </div>
       
          

            <div className='text-center text-white fs-2 abouttext '>
               <b>  About us
   </b>           </div>


   <div className='aboutinfo pt-5 '>
    <div className='info col-lg-12 d-flex container '>
        <div className='info1 col-lg-6  '>
            <p className=' fs-2'><b>Welcome To  <span className='info1span'> Live Dinner Restaurant</span></b></p>
            <p className='fs-3'><b>Little Story</b></p>
            <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.

Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
      <button className='btn1 border-0 p-2 text-white'>RESERVATION</button>
        </div>
        <div className='img col-lg-6 bg-info img     '>
            <img  src={about1} style={{height:"100%", width:"100%"}}/>
        </div>




    </div>
    <div className='container fs-5 p-2'>
    <p>
    Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida. Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit. 
    </p>
    <p>nteger purus velit, eleifend eu magna volutpat, porttitor blandit lectus. Aenean risus odio, efficitur quis erat eget, mattis tristique arcu. Fusce in ante enim. Integer consectetur elit nec laoreet rutrum. Mauris porta turpis nec tellus accumsan pellentesque. Morbi non quam tempus, convallis urna in, cursus mauris. </p>
    </div>

</div>

<div>
    <Footer/>
</div>

        </div>


       
  )
}

export default About