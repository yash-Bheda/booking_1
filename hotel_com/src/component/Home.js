import React, { useEffect, useRef } from 'react'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import Navbar from './Navbar'
import about1 from '../img/About1.jpg'
import Menu from './Menu'
import Gallary from '../component/Gallary'
import Footer from './Footer'



function Home() {
  const chef = [
    {
      id:1,
      src: "/image/chef1.jpg",
      name: "Yash",

    },
    {
      id:2,
      src: "/image/chef2.jpg",
      name: "Montu"
    },
    {
      id:3,
      src: "/image/chef3.jpg",
      name: "vivek"
    },
    {
      id:4,
      src: "/image/chef4.jpg",
      name: "Arav"
    }
  ]
  const Special=[
    {
      id:1,
      src:"/image/manchuriyan.jpg",
      name:"Manchurian ",
      price:"110",
      btn:"Order Now",
    },
    {

        id:2,
        src:"/image/kabab.jpg",
        name:"Hara Bhara Kabab ",
        price:"140",
        btn:"Order Now",
    },
    {
      id:3,
      src:"/image/pannerangara.jpg",
      name:"  Paneer Angara ",
      price:"190",
      btn:"Order Now",
    }
  ]

 
   return (


    <div className=''>
       <div className='navbarconpo'>
            <Navbar />
      </div>
       
      

      

      <div id="carouselExampleIndicators" className="carousel slide carousel-fade   " data-bs-ride="carousel">


        <div className="carousel-indicators ">

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
       

        <div className="carousel-inner homi ">
       
      



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
          <div className="carousel-item ">
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
          <div className="carousel-item">
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



      <div className='aboutinfo pt-5 '>
        <div className='info col-lg-12 d-flex container '>
          <div className='info1 col-lg-6  '>
            <p className=' fs-2'><b>Welcome To  <span className='info1span'> Live Dinner Restaurant</span></b></p>
            <p className='fs-3'><b>Little Story</b></p>
            <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.

              Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
            <button className='btn1 border-0 p-2 text-white'>RESERVATION</button>
          </div>
          <div className='img col-lg-6 bg-info img    '>
            <img src={about1} style={{ height: "100%", width: "100%" }} />
          </div>


        </div>
      </div>

      <div className='aboutafter p-3 mt-2'>
        <div className='container  text-center p-3 '>
          <p className='fs-2 text-white'>
            " If you're not the one cooking, stay out of the <br></br>way and compliment the chef. "
          </p>
          <p className='text-white fs-4'>Michael Strahan</p>

        </div>

      </div>

      <div className='container'>
          <div className='text-center' >
            <p className='fs-1' style={{fontWeight:"bold"}}>Our Special Food</p>
            <p className='fs-4' style={{fontFamily:"cursive"}}>Must Try This Food</p>

          </div>

          <div>
            <div className='col-lg-12 row text-center'>

            {
               Special.map((itm)=>{
                return(
                  <div className='col-lg-4' key={itm.id} >
                    <div >
                      <img src={itm.src} style={{height:"180px",width:"180px"}}/>
                      </div>
                      <div>
                        <b>
                        {itm.name}
                        </b>
                        </div>
                        <div>
                        price : 

                          {
                            itm.price
                          }
                          </div>
                          <div>
                            <button className='btn1 text-white p-2 border-0'>
                            {
                              itm.btn
                            }

                            </button>
                           
                            </div>
                            </div>
                    
                )
               })
            }
              

            </div>
          </div>
        </div>


      <div className='container mt-3'>
        <h1 className='text-center mt-2 'style={{fontFamily:"cursive"}}>Our Master Chefs</h1>
        <div className='col-lg-12 row container mt-3 chefbox bg-dark'>



          {
            chef.map((item) => {
              return (
                <div className='col-lg-3 border text-center box  'key={item.id}>

                  <div className='' >




                    <img src={item.src} className='rounded-circle chefimg' style={{ height: "200px", width: "200px" }} />




                  </div>
                  <div className='fs-4 text-white'>{item.name}</div>




                </div>




              )
            })
          }
          
        </div>

      





      </div>
<Footer/>

    </div>





  )
        }

{/* <div className='col-lg-3'>bhau</div>
<div className='col-lg-3'>riya</div>
<div className='col-lg-3'>riya1</div> */}

export default Home