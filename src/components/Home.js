import React from 'react'
import "./Home";
import "./Home.css"

function Home() {
  return (
    <div className='home__container'>
        <div className='home'>
        <p>Book International and Domestic Flights</p>
           <div className='home__dropdown'>
             <span>Trip Type:</span>
             <select className='Trip__type'>
                <option value="One Way">One Way</option>
                <option value="Round Trip">Round Trip</option>
                <option value="Mult City">Mult City</option>
             </select>
           </div>

        <div className='inputs'>
           <div className='from home__input'>
              <p>FROM</p>
              <input type="text" placeholder='Delhi'/>
           </div>
           <div className='to home__input'>
              <p>TO</p>
              <input type="text" placeholder='Mumbai'/>
           </div>
           <div className='departure home__input'>
              <p>DEPARTURE</p>
              <input type="date"/>
           </div>
           <div className='return home__input'>
              <p>RETURN</p>
              <input type="date"/>
           </div>

        </div>
        <div className='home__search'>SEARCH</div>
      </div>
    </div>
  )
}

export default Home