import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import food1 from '../img/food.png'
import food2 from '../img/food2.jpg'
import food3 from '../img/food3.jpg'
import food4 from '../img/food4.jpg'
import { useState } from "react";
import menu from '../Json/Menu.json'
import { CardSubtitle } from 'react-bootstrap'
import Footer from './Footer'


const allcat= ['all',...new Set(menu.map((item)=>item.category))]



function Catagories({filtitm}){
const [cat,setcat]=useState(allcat)







{
  return(
    <>
    <div className='container  '>
      <div className='row  container   '>
        <div  className='col-8 m-2 d-flex justify-content-center  '>
          {
           cat.map((category)=>
            {
              return(
                <div key={category}>
                <button  className='p-2  m-2 menubtn1 text-white ' onClick={()=>filtitm(category)}>{category} </button>
                </div>
              
              )


            })
          }

        </div>

      </div>

    </div>
    </>
  )
}
}



function Menu() {


  const[menuset,setMenuItems]=useState(menu)

  // console.log(menuset)

  const filtitm=(category)=>
{
  if(category =='all')
  {

  return setMenuItems(menu)
  }

  
  const newitm=menu.filter((item)=>item.category == category)
  return setMenuItems(newitm)
}



  return (
    <div>
      <div className='foodmenu'>
        <Navbar/>
       
        </div>
        <div className='container'>
          <p className='text-center fs-1'style={{fontFamily:"cursive"}}>OUR MENU</p>
          
        
          </div>

          <div className='container'>
            <Catagories  filtitm={filtitm}/>
            <div className='col-lg-12 d-flex flex-wrap p-2 text-center' >

              {
                
               menuset.map((item)=>
                  {
                     const{src,name,price,btn} = item
  
                    return(
                      <div className='col-lg-3 p-2'key={item.id}>
  
                        <div >
                          <img  src={src} style={{height:"150px" ,width:"150px"}}/>
                          </div>
                          <div><b>{name}</b></div>
                          <div>Price: {price}</div>
                          <div><button className='btn1 text-white border-0 p-2'> {btn}</button></div>
  
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

export default Menu