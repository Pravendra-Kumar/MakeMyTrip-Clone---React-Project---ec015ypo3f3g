import "./Book.css";
import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {DataAppContext} from '../DataApp';


function Book() {

  const navigate = useNavigate();
    const localContext = useContext(DataAppContext);
    const {appState, setAppState}=localContext;
    const {loginStatus, username}= appState;

  
    useEffect(() => {
      if(!loginStatus) {
        console.log('not logged in')
        navigate('/login');
      }
      else {
        console.log('logged in')
      }
    })

 

  return (
    <div className='book__container'>
      <div className='book'>
        <div className='fare'>
             <h3>Fare Summary</h3>
             <div className='row row1 fare1'> <p>Base Fare</p><span>₹500</span></div>
             <div className='row row1 fare1 '> <p>Fee</p><span>₹50</span></div>
             <div className='row row1 fare1'> <p>Total Amount</p><span>₹550</span></div>
        </div>
        <div className='payment'>
             <h3>Payment Method</h3>
             <div className='row row1'> <input type="text" placeholder='Name of Card'/></div>
             <div className='row row1'> <input type="text" placeholder='Card Number'/></div>
             <div className='row row1'> <input type="text" placeholder='Expire Date'/></div>
             <div className='row row1'> <input type="text" placeholder='CVV' required/></div>
             <div className='row row3'> <p >Pay</p></div>
        </div>
      </div>
    </div>
  )
}

export default Book