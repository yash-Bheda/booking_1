import React, { useState } from 'react'
// import { Navbar } from 'react-bootstrap'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bookta from '../img/booktable.jpg'
import Footer from './Footer';


function Booktable() {

  const [selectedDate, setSelectedDate] = useState();
  const [name,setname]=useState("")
  const [phone,setphone]=useState("")
  const [email,setemail]=useState("")
  const [perosn,setperson]=useState("")


  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };
  function bookhandle(e)
  {
    e.preventDefault()

    const booktable={name,phone,email,perosn,selectedDate}
    console.log(booktable)
    
    fetch("http://localhost:6315/booktab",{

    method:"POST",
    "headers":{"content-type":"application/json"},
    body:JSON.stringify(booktable)

    }).then((res)=>
    {
      alert("book successfully")
      return  res.json()
    })

  }




  return (
    <div>
      <div className='booktable'>
        <Navbar/>
       
        </div>
        <div className='container mt-5'>
          <div className='col-lg-12 row '>
             <div className='col-lg-6'>
              <form onSubmit={bookhandle}>

              <div className='p-2'>
                <p className='fs-1' style={{fontFamily:"cursive"}}>Book A Table </p>
              </div>
              <div className='m-2' >
                <input className='p-1' value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Your Name' style={{height:"40px",width:"100%"}} required/>
              </div>
              <div className='m-2'>
                <input placeholder='Phone Number'value={phone} onChange={(e)=>{setphone(e.target.value)}} style={{height:"40px",width:"100%"}}required/>
              </div>
              <div className='m-2'>
                <input placeholder='Your Email'value={email} onChange={(e)=>{setemail(e.target.value)}} style={{height:"40px",width:"100%"}}/>
              </div>
              <div className='m-2'>
              <input placeholder='How Many Persons'value={perosn} onChange={(e)=>{setperson(e.target.value)}} style={{height:"40px",width:"100%"}}required/>
            </div>


                

              <div>
                <p className='ms-2 fs-5'>Please Select Date</p>

                <i className="fa-solid fa-calendar-days"></i>

                
              <DatePicker className='ms-2'
        selected={selectedDate} 
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // You can customize the date format
      />

       <div className='mt-2'>
                <button type='submit' className='m-2 border-0 bg-success' style={{height:"40px", width:"160px"}}>Book Now</button>
              </div>


              </div>
              </form>

              

              
            

            </div>

           
            <div className='col-lg-6'>
            <img src={bookta} style={{height:"100%" ,width:"100%"}}/>
            </div>

          </div>
        </div>

      

<Footer/>


</div>  
     
       

   


  )
}

export default Booktable