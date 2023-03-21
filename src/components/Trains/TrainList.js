import React, { useEffect, useState } from 'react'
import "./TrainList.css"
import TCard from './TCard'


function FlightList() {

  const[trainList, setTrainList]= useState([]);

  useEffect(()=>{
    getData2()
  }, [])

const getData2=()=>{

  const url=`https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains`
   fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    setTrainList(data)
    // console.log(data)
    // console.log(data[0].from)
  
    });
}




  return (
    <div className='flight__container'>
    <div className='flight'>
    <h3>Available Tickets</h3>
       <div className='flight__cards'>
            
       {trainList.map((train,index)=>(
                <TCard key={index} train={train} />
      ))}
           
            
          
       </div>
    </div>
      
    </div>
  )
}

export default FlightList