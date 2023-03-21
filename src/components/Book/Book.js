import React from 'react'
import "./Book.css"

function Book() {
  return (
    <div className='book__container'>
      <div className='book'>
        <div className='fare'>
             <h3>Fare Summary</h3>
             <div className='row row1n row2'> <p>Base Fare</p><span>₹5200</span></div>
             <div className='row row1 row2'> <p>Fee</p><span>₹50</span></div>
             <div className='row row1 row2'> <p>Total Amount</p><span>₹5250</span></div>
        </div>
        <div className='payment'>
             <h3>Payment Method</h3>
             <div className='row row1'> <input type="text" placeholder='Name of Card'/></div>
             <div className='row row1'> <input type="text" placeholder='Card Number'/></div>
             <div className='row row1'> <input type="text" placeholder='Expire Date'/></div>
             <div className='row row1'> <input type="text" placeholder='CVV'/></div>
             <div className='row row3'> <p>Pay</p></div>
        </div>
      </div>
    </div>
  )
}

export default Book