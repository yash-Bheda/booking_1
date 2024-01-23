import React from 'react'

function Footer() {
  return (
    <div className='mt-3'>
        <footer>
        <div className='footermain border rounded-pill p-2 ' >
            <div className='container d-flex flex-wrap  '>
                <div className='d-flex m-2 ms-3 '>
                    <div>
                        
                <i className="fa-solid fa-phone-volume fa-3x footeri"  ></i>
                </div>
                <p className='ms-4 fs-5' style={{fontWeight:"bolder"}}>
                    phone<br/>
                +01 123-456-4590

                </p>
                
                </div>
                <div className='d-flex m-2 ms-3'>
                    <div>               <i className="fa-solid fa-envelope fa-3x footeri"></i>
                    
                    </div>
                    

                <p className='ms-4 fs-5' style={{fontWeight:"bolder"}}>
                Email<br/>
                Livedinner6313@gmail.com

                </p>
                
                </div>
                <div className='d-flex m-2 ms-3'>
                    <div>                <i className="fa-solid fa-location-dot fa-3x footeri"></i>
                    </div>

                <p className='ms-4 fs-5' style={{fontWeight:"bolder"}}>
                Location<br/>
                Palanpur Gujrat India

                </p>

                </div>

            </div>
        </div>
        <div>
            <div className='footerimg ' >
                <div className='col-lg-12 row text-white'style={{fontFamily:"bold"}}>
                    <div className='col-lg-3'>
                        <h3><b>About Us</b></h3>
                        <p>Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui.</p>
                    </div>
                    <div className='col-lg-3'>
                        <h3><b>Subscribe</b></h3>
                        <div>
                            <input placeholder='Enter Email' style={{height:"40px", width:"100%",outline:"0"}}/>
                            <button className='btn1 border-0 text-white' style={{height:"40px", width:"160px"}}>Subscribe Now</button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <h3><b>Contact information</b></h3>
                        <p>Ipsum Street, Lorem Tower, <br/>MO, Columbia, 508000</p>
                        <p>+01 2000 800 9999</p>
                        <p>info@admin.com</p>
                    </div>

                    <div className='col-lg-3'>
                        <h3><b>Opening hours</b></h3>
                        <ul>
                            <li>Monday: Closed</li>
                            <li>Tue-Wed : 9:Am - 10PM</li>
                            <li>Thu-Fri : 9:Am - 10PM</li>
                            <li>Sat-Sun : 5:PM - 10PM</li>
                        </ul>
                        
                    </div>

                </div>
                <div className='bg-dark text-white text-center p-2'>
                    <div>All Rights Reserved. © 2018 Live Dinner Restaurant Design By : React design</div>
                </div>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer