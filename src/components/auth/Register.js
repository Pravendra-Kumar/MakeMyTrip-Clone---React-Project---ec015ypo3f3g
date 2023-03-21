import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Register.css"
const Register = () => {

    const initialData = {
        username: '',
        password: '',
    }

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [status, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    //methods for form submission button
    const registerFn = () => {
            //form submiited
            setStatus(true);
            //call api for form submission - POST - Submit Data - formdata/localstorage
            let temp = JSON.parse(localStorage.getItem('users')) || [];
            localStorage.setItem('users', JSON.stringify([...temp, formdata]));
            //store the response in a state variable
            setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [status])


    return (
        <div className='register'>
        <div className='register__conatainer'>

        
             <div className='register__img'>
              <img src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png' alt=''/>
             </div>

              <h3>Register Form</h3>
            <input type="text" id="username" onChange={updateData} value={formdata.username} placeholder="Enter UserName"/>

            <input type="password" id="password" onChange={updateData} value={formdata.password} placeholder="Enter Password" /><br></br>

            <button className='btn' onClick={registerFn}>Register</button>
            <br></br>
            <br></br>
            
            <Link to="/login">Login</Link>
            {status && <div class="alert alert-success" role="alert">
                <p >Registered Successfully</p>
                </div>
            }
            </div>
        </div>
    )
}

export default Register