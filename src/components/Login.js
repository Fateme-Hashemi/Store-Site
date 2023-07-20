import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Signup.module.css';
import { validate } from './validate';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './reacttoastify';
import {Link} from "react-router-dom"



const Login = () => {

const [data, setData] = useState({
    email: "",
    password: ""
 
})

const [error, setError] = useState({});

const [touched, setTouched] = useState({});
useEffect (()=>{
    setError(validate(data, "Login"))
    console.log(error)
},[data],[touched])




const changeHandler = (event) => {

        setData({...data, [event.target.name]: event.target.value})
}

const focusHandler = event => {
 setTouched({...touched, [event.target.name]:true})
}




const submitHandler = event => {
      
  event.preventDefault()
    if(!Object.keys(error).length) {
        notify("You signed up successfully!", "success");
    }else {
        notify("Invalid data", "error");
        setTouched( {
            email:true,
            password:true,
          
        })
    }
}
    return (

      <div className={styles.outercontainer}>
          <div className={styles.Container}>

<form onSubmit={submitHandler} className={styles.formContainer}>
    <h2 className={styles.header}>Login</h2>

    <div className={styles.item}>
         <label>Email</label>
    <input type='text' value={data.email} name='email' onChange={changeHandler} onFocus={focusHandler} className={(error.email && touched.email) ? styles.uncompleted : styles.forminput } />
    {error.email && touched.email && <span>{error.email}</span>}
    </div>
    <div className={styles.item}>
          <label>Password</label>
    <input type='password' value={data.password} name='password' onChange={changeHandler} onFocus={focusHandler} className={(error.password && touched.password) ? styles.uncompleted : styles.forminput } />
    {error.password && touched.password && <span>{error.password}</span>}
    </div>
    <div className={styles.button}>
        <Link to='/signup' className={styles.loginbutton}>Sign Up</Link>
        <button type='submit' className={styles.submitbutton}>Log in</button>
    </div>

</form>



<ToastContainer />
</div>

      </div>


    );
};

export default Login;