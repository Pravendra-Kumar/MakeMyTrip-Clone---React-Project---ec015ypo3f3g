import React from 'react'
import "./TCard.css"
import TrainIcon from '@mui/icons-material/Train';
import { Link } from 'react-router-dom';

function TCard({train}) {
  return (
    <div className='card__container'>
       <div className='card'>
         <div className='card__info'>
          <div  className='row1'>
              <p>from:</p>
              <h3>{train?train.from:""}</h3>
              <p>to:</p>
              <h3>{train?train.to:""}</h3>
              <p>Train No:</p>
              <h3>{train?train.train_number:""}</h3>
          </div>
          <div className='row2'>
              <p>departure:</p>
              <h3>{train?train.departure.departureTime:""}</h3>
              <p>Date:</p>
              <h3>{train?train.departure.departureDate:""}</h3>
              <h1><TrainIcon sx={{width:30, height:30}}/></h1>
          </div>
          <div className='row3'>
              <p>Price:</p>
              <h3>{train?train.price:""}</h3>
              <p>KM:</p>
              <h3>{train?train.kilometers:""}</h3>
              <p>Duration:</p>
              <h3>{train?train.duration:""}</h3>
          </div>
        </div> 
        <div className='card__btn'><Link to="/book">Book</Link></div>
       </div>
    </div>
  )
}

export default TCard