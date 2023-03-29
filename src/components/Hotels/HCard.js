import React from 'react'
import "./HCard.css"
import StarIcon from '@mui/icons-material/Star';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Link } from 'react-router-dom';

function HCard({
  from,
  hotels,
  setHotels,
  filteredHotels,
  setFilteredHotels
}){

return (

  <div className='card__container'>

    {filteredHotels &&
      filteredHotels.map((hotel, index) => (
        <>
        <div className='card'>
          <div className='card__info'>
            <div className='row1'>
              <p>City:</p>
              <h3>{hotel ? hotel.city : ""}</h3>
              <p>Hotel Name:</p>
              <h3>{hotel ? hotel.hotel_name : ""}</h3>
              <p>Room Type:</p>
              <h3>{hotel ? hotel.room_type : ""}</h3>
            </div>
            <div className='row2'>
              <p>Check In:</p>
              <h3>{hotel ? hotel.check_in : ""}</h3>
              <p>Check Out:</p>
              <h3>{hotel ? hotel.check_out : ""}</h3>
              <h1><LuggageIcon sx={{ width: 30, height: 30 }} /></h1>
            </div>
            <div className='row3'>
              <p>Price:</p>
              <h3>{hotel ? hotel.price_per_night : ""}</h3>
              <p>Rating:</p>
              <h3>{hotel ? hotel.rating : ""}</h3>
              <p>Quests:</p>
              <h3><StarIcon />{hotel ? hotel.guests : ""}</h3>
            </div>
          </div>
          <div className='card__btn'><Link to="/book">Book</Link></div>
        </div>
      </> 
      ))}
  </div>
)
}

export default HCard