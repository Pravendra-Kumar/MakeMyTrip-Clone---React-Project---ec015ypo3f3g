import React, { useEffect, useState } from 'react'
import "./FlightList.css"
import FCard from './FCard'


function FlightList() {

  const[flightList, setFightList]= useState([]);

  useEffect(()=>{
    getData()
  }, [])

const getData=()=>{

  const url=`https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
   fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    setFightList(data)
    // console.log(data)
    // console.log(data[0].from)
  
    });
}




  return (
    <div className='flight__container'>
    <div className='flight'>
    <h3>Available Tickets</h3>
       <div className='flight__cards'>
            
       {flightList.map((flight,index)=>(
                <FCard key={index} flight={flight} />
      ))}
           
            
          
       </div>
    </div>
      
    </div>
  )
}

export default FlightList