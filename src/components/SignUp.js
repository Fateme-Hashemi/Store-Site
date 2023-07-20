import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Signup.module.css';
import { validate } from './validate';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './reacttoastify';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


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
    setError(validate(data, "SignUp"))
    console.log(error)
},[data],[touched])




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




const submitHandler = event => {
      
  event.preventDefault()
    if(!Object.keys(error).length) {
        notify("You signed up successfully!", "success");
    }else {
        notify("Invalid data", "error");
        setTouched( {
            name: true,
            email:true,
            password:true,
            confirmpassword: true,
            isAccepted: true
        })
    }
}
    return (

      <div className={styles.outercontainer}>
          <div className={styles.Container}>

<form onSubmit={submitHandler} className={styles.formContainer}>
    <h2 className={styles.header}>SignUp</h2>
     <div className={styles.item}>
        <label>Name</label>
    <input type='text' value={data.name} name='name' onChange={changeHandler} onFocus={focusHandler} className={(error.name && touched.name) ? styles.uncompleted : styles.forminput } />
    {error.name && touched.name && <span>{error.name}</span>}
     </div>
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
    <div className={styles.item}>
            <label>ConfirmPassword</label>
    <input type='password' value={data.confirmpassword} name='confirmpassword' onChange={changeHandler} onFocus={focusHandler} className={(error.confirmpassword && touched.confirmpassword) ? styles.uncompleted : styles.forminput } />
    {error.confirmpassword && touched.confirmpassword && <span>{error.confirmpassword}</span>}
    </div>
    <div className={styles.checkbox}>
                   <label>I accept a terms of privacy policy</label>
    <input type='checkbox' value={data.isAccepted} name='isAccepted' onChange={changeHandler} onFocus={focusHandler} />
    {error.isAccepted && touched.isAccepted && <span>{error.name}</span>}
    </div>

    <div className={styles.button}>
        <Link to='/login' className={styles.loginbutton}>Login</Link>
        <button type='submit' className={styles.submitbutton}>Sign Up</button>
    </div>

</form>



<ToastContainer />
</div>

      </div>


    );
};

export default SingUp;