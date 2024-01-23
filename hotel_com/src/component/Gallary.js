import React from 'react'
import Navbar from './Navbar'
import gallary1 from '../Json/Gallary.json'
import video1 from '../img/vid1.mp4'
import Footer from './Footer'

function Gallary() {
  return (
    <div>
        <div className='gallary'>
        <Navbar/>
        <div className='container text-center pt-5 '>
            <p className=' fs-1 mt-5  p-4 ' style={{fontFamily:"cursive"}}> <b> Welcome Our Gallery </b> </p>
        </div>


        </div>

        <div/>
        <div>
            <div className='container mt-5'>
                <video height={"300px"} width={"100% " } controls loop>
                      <source src={video1} >
                    </source>
                    
                </video>
            </div>
        </div>
        <div>
        <h1 className='text-center' style={{fontFamily:"cursive"}}>See Our Gallary</h1>

            <div className='col-lg-12 container d-flex flex-wrap mt-5 ' >


                {
                    gallary1.map((item)=>{
                        return(

                            <div  className='col-lg-3 p-2 border d-flex justify-content-center m-2 ' key={item.id}>
                                <div  >
                                    <img className='galimg  ' src={item.src} style={{height:"200px", width:"200px"}}/>
                                    </div>

                                   
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

export default Gallary