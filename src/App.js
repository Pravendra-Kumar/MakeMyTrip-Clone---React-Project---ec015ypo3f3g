import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FlightList from './components/Flights/FlightList';
import HotelList from './components/Hotels/HotelList';
import TrainList from "./components/Trains/TrainList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from "./components/auth/Register"
import Book from './components/Book/Book';
import DataApp from './components/DataApp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>  
      <DataApp>
      <div className="App">
              <Navbar/>

              <Routes>
                  <Route path="/" element={ <><Home/> <FlightList/><Footer/></> }/>
                  <Route path="/flight" element={<> <Home/><FlightList/><Footer/></>}/>
                  <Route path="/hotel" element={<><Home/><HotelList/><Footer/></>}/>
                  <Route path="/train" element={ <><Home/><TrainList/><Footer/></>}/>
                  <Route path="/book" element={ <Book/>}/>
                  <Route path="/login" element={ <Login/>}/>
                  <Route path="/register" element={ <Register/>}/>
                  
              </Routes>

              
      </div>
      </DataApp>

     </BrowserRouter>
    </>
  
  );
}

export default App;
