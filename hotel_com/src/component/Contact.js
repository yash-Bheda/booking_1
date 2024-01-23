import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import about1 from '../img/About1.jpg'



function Contact() {
  return (
    <div>
    <div className='about'>
          <div className='navbarpagae'>

<Navbar/>

    </div>
          

            <div className='text-center text-white fs-2 abouttext '>
               <b>  Contact Us
   </b>           </div>

  
             </div>
              <div className='contactmap container mt-5'>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9552631744855!2d72.41365453722237!3d24.17330167847414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebdd722cf687%3A0xf75bc4a3b39a51f3!2sHotel%20Way%20Wait%20-%20Best%20Hotel%2C%20Ac%20Hotel%2C%20Budget%20Hotels!5e0!3m2!1sen!2sin!4v1704086059248!5m2!1sen!2sin"style={{ width:"100%", height:"500px" ,border:"0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
           
           
           
               </div>
               <div className='contactinfo container '>

                <h2 className='text-center'>Contact</h2>
                <form action=' https://formspree.io/f/xyyryaqk ' method='POST'>
                <div className='msginfo '>
                    <div className='m-2' >
                    <input name='name' placeholder='Enter Your Name' style={{height:"50px", width:"100%"}}required></input>

                    </div>
                    <div className='m-2'>
                    <input name='email' placeholder='Enter Your Mail' style={{height:"50px", width:"100%"}} required></input>


                    </div>
                    <div className='m-2'   >
                        <select  style={{height:"50px", width:"100%"}} name='peson' required>
                            <option>Please select perosn *</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>



                    </div>
                    <div className='m-2'>
                        <textarea name='message'  rows={5}placeholder='Enter Your Message'style={{height:"50px", width:"100%"}}required>

                        </textarea>
                    </div>

                    <div className='m-2'>
                        <button className='btn1 text-white border-0' style={{height:"50px", width:"150px"}}> SEND MESSAGE</button>
                    </div>

                </div>

                </form>

                
               </div>
               <Footer/>
               
               </div>
           
  )
}

export default Contact