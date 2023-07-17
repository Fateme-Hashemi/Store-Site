import React from 'react';
import { useState, useEffect } from 'react';
import styles from './SignUp.module.css';
import { validate } from './validate';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './reacttoastify';

const SingUp = () => {

const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false
})

const [error, setError] = useState({});

const [touched, setTouched] = useState({});
useEffect (()=>{
    setError(validate(data))
    console.log(error)
},[data])




const changeHandler = (event) => {
    if(event.target.name === "isAccepted") {
        setData({...data,[event.target.name]: event.target.check})
    }
    else {
        setData({...data, [event.target.name]: event.target.value})
    }
}

const focusHandler = event => {
 setTouched({...touched, [event.target.name]:true})
}




const submitHandler =event => {
    if(!Object.keys(error).length) {
        console
    }else {
        setT
    }
}
    return (

        <div>

        <form onSubmit={submitHandler}>
            <h2>SignUp</h2>
            <label>Name</label>
            <input type='text' value={data.name} name='name' onChange={changeHandler} onFocus={focusHandler} />
            <label>Email</label>
            <input type='text' value={data.email} name='email' onChange={changeHandler} onFocus={focusHandler} />

            <label>Password</label>
            <input type='password' value={data.password} name='password' onChange={changeHandler} onFocus={focusHandler} />

            <label>ConfirmPassword</label>
            <input type='password' value={data.confirmpassword} name='confirmpassword' onChange={changeHandler} onFocus={focusHandler} />

            <label>I accept a terms of privacy policy</label>
            <input type='checkbox' value={data.isAccepted} name='isAccepted' onChange={changeHandler} onFocus={focusHandler} />
            <div>
                <a href='#'>Login</a>
                <button type='submit'>Sign Up</button>
            </div>

        </form>



        <ToastContainer />
        </div>



    );
};

export default SingUp;