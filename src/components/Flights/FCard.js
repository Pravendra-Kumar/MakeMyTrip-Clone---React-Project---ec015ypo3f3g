import React from 'react'
import "./FCard.css"
import { Link } from 'react-router-dom'
import FlightIcon from '@mui/icons-material/Flight';

function FCard({
  from,
  to,
  depart,
  arrival,
  flights,
  setFlights,
  filteredflights,
  setFilteredFlights,
}) {
  return (
    <div className='card__container'>

     {filteredflights &&
          filteredflights.map((flight,index)=>(
               
   

       <div className='card'>
         <div className='card__info'>
         <div className='row1 '>
              <div>airline: <span>{flight?flight.airlineName:""}</span></div>
             
         </div>
          <div  className='row1 '> 
              <p>from: {flight?flight.from:""}<span></span></p> 
              <p>via: <span>{flight?flight.via[0]:""}</span></p>
              <p>to: <span>{flight?flight.to:""}</span></p>
          </div>
          <div className='row2'>
              <p>departure: <span>{flight?flight.departure.departureTime:""} | {flight?flight.departure.departureDate:""}</span></p>
              <p>return:  <span>{flight?flight.return.returnTime:""}|{flight?flight.return.returnDate:""}</span></p>
             
          </div>
          <div className='row3'>
              <p>Duration:  <span>{flight?flight.duration:""}</span></p>
              <p>Price:  <span>{flight?flight.price:""}</span></p>
          </div>
        </div> 
        <div className='card__btn'><Link to='/book'>Book</Link></div>
       </div>

       ))}
       
    </div>
  )
}

export default FCard