import React, { useEffect } from 'react';
import { useState } from 'react';
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
const [touched, setTouched] = useState({})

const changeHandler = (event) => {
    if(event.target.name === "isAccepted") {
        setData({...data,[event.target.name]: event.target.checked})
    }
    else {
        setData({...data, [event.target.name]: event.target.value})
    }
}

useEffect(()=> {
    setError(validate(data))
},[data],[touched])

const focusHandler = event => {
    setTouched({...touched, [event.target.name]: true})
}

const submitHandler = event => {
    if(!Object.keys(error).length) {
        console.log(data)
    } else {
        setTouched({
            name:true,
            password:true,
            confirm: true,
            email : true, 
            isAccepted: true
        })
    }
}
    return (

        <div>

        <form onSubmit={submitHandler}>
            <h2>SignUp</h2>
            <label>Name</label>
            <input type='text' value={data.name} name='name' onChange={changeHandler} onFocus={focusHandler} />
            {error.name && touched.name &&  <span>{error.name}</span>}

            <label>Email</label>
            <input type='text' value={data.email} name='email' onChange={changeHandler} onFocus={focusHandler} />
            {error.email && touched.email && <span>{error.email}</span>}

            <label>Password</label>
            <input type='password' value={data.password} name='password' onChange={changeHandler} onFocus={focusHandler} />
            {error.password && touched.password &&  <span>{error.password}</span>}

            <label>ConfirmPassword</label>
            <input type='password' value={data.confirmpassword} name='confirmpassword' onChange={changeHandler} onFocus={focusHandler} />
            {error.confirmpassword && touched.confirmpassword &&  <span>{error.confirmpassword}</span>}

            <label>I accept a terms of privacy policy</label>
            <input type='checkbox' value={data.isAccepted} name='isAccepted' onChange={changeHandler} onFocus={focusHandler} />
            {error.isAccepted && touched.isAccepted &&  <span>{error.isAccepted}</span>}

            <div>
                <a href='#'>Login</a>
                <button type='submit'>Sign Up</button>
            </div>

        </form>



            
        </div>



    );
};

export default SingUp;