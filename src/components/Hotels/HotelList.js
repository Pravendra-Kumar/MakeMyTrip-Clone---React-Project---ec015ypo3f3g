import React, { useEffect, useState } from 'react'
import "./HotelList.css"
import HCard from './HCard'


function HotelList() {

  const[hotelList, setHotelList]= useState([]);

  useEffect(()=>{
    getData1()
  }, [])

const getData1=()=>{

  const url=`https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
   fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    setHotelList(data)
    // console.log(data)
    
  
    });
}




  return (
    <div className='flight__container'>
    <div className='flight'>
    <h3>Available Tickets</h3>
       <div className='flight__cards'>
            
       {hotelList.map((hotel,index)=>(
                <HCard key={index} hotel={hotel} />
      ))}
           
            
          
       </div>
    </div>
      
    </div>
  )
}

export default HotelList