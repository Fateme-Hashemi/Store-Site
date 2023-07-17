import React from 'react';
import { useState, useEffect } from 'react';
import styles from './SignUp.module.css';
import { validate } from './validate';
const SingUp = () => {

const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false
})

const [error, setError] = useState({});

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

    return (

        <div>

        <form>
            <h2>SignUp</h2>
            <label>Name</label>
            <input type='text' value={data.name} name='name' onChange={changeHandler} />
            <label>Email</label>
            <input type='text' value={data.email} name='email' onChange={changeHandler} />

            <label>Password</label>
            <input type='password' value={data.password} name='password' onChange={changeHandler} />

            <label>ConfirmPassword</label>
            <input type='password' value={data.confirmpassword} name='confirmpassword' onChange={changeHandler} />

            <label>I accept a terms of privacy policy</label>
            <input type='checkbox' value={data.isAccepted} name='isAccepted' onChange={changeHandler} />
            <div>
                <a href='#'>Login</a>
                <button type='submit'>Sign Up</button>
            </div>

        </form>



            
        </div>



    );
};

export default SingUp;