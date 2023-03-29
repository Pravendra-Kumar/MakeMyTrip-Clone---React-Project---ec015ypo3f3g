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
          <div  className='row1'>
              <p>from:</p>
              <h3>{flight?flight.from:""}</h3>
              <p>to:</p>
              <h3>{flight?flight.to:""}</h3>
              <p>airline:</p>
              <h3>{flight?flight.airlineName:""}</h3>
          </div>
          <div className='row2'>
              <p>departure:</p>
              <h3>{flight?flight.departure.departureTime:""}|{flight?flight.departure.departureDate:""}</h3>
              <p>return:</p>
              <h3>{flight?flight.return.returnTime:""}|{flight?flight.return.returnDate:""}</h3>
              <h1><FlightIcon sx={{width:30, height:30}}/></h1>
          </div>
          <div className='row3'>
              <p>Price:</p>
              <h3>{flight?flight.price:""}</h3>
              <p>via:</p>
              <h3>{flight?flight.via[0]:""}</h3>
              <p>Duration:</p>
              <h3>{flight?flight.duration:""}</h3>
          </div>
        </div> 
        <div className='card__btn'><Link to='/book'>Book</Link></div>
       </div>

       ))}
       
    </div>
  )
}

export default FCard