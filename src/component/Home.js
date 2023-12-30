import React from 'react'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import Navbar from './Navbar'

function Home() {
  return (
    
    
    <div className=''>
       
         <div id="carouselExampleIndicators" className="carousel slide carousel-fade   " data-bs-ride="carousel">
         

  <div class="carousel-indicators">

    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 

 
  <div className="carousel-inner homi ">
  <div className='navbarconpo'>
  <Navbar/>

    </div>
    

   
    

 
    <div className="carousel-item  active ">


        
        <div className='slide1'>


      <div className='text-white slidetext1 p-3 ps-5 pt-5'>
        <b>Welcome To <br></br>
Live Dinner Restaurant </b></div>
<p className='text-white fs-4 ps-5'>
See how your users experience your website in realtime or view<br></br>
trends to see any changes in performance over time.
</p>
<button className='text-white p-3 ms-5 btn1 border-0'>
    RESERVATION

</button>

   
        </div>
       


    </div>
    <div class="carousel-item ">
      {/* <img src={slide2} className="d-block w-100" alt="..."/> */}
      <div className='slide2'>
      <div className='text-white slidetext1 p-3 ps-5 pt-5'>
        <b>Welcome To <br></br>
Yammi food  Restaurant </b></div>
<p className='text-white fs-4 ps-5'>
See how your users experience your website in realtime or view<br></br>
trends to see any changes in performance over time.
</p>
<button className='text-white p-3 ms-5 btn1 border-0'>
    RESERVATION

</button>

   
        </div>
       

      </div>
    <div class="carousel-item">
      {/* <img src={slide3} className="d-block w-100" alt="..."/> */}
      <div className='slide3'>
      <div className='text-white slidetext1 p-3 ps-5 pt-5'>
        <b>Welcome To <br></br>
Live Dinner Restaurant </b></div>
<p className='text-white fs-4 ps-5'>
See how your users experience your website in realtime or view<br></br>
trends to see any changes in performance over time.
</p>
<button className='text-white p-3 ms-5 btn1 border-0 '>
    RESERVATION

</button>

   
        </div>
       



    </div>
  </div>
  <button className="carousel-control-prev   " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon btn1 p-4    " aria-hidden="true"></span> */}
    <span className="visually-hidden  ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon btn1 p-4" aria-hidden="true"></span> */}
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
  )
}

export default Home