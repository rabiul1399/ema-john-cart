import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import image from '../../images/download (2).png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [signInWithEmailAndPassword,user,error,loading] = useSignInWithEmailAndPassword(auth)

    const navigate = useNavigate();

    if (error) {
        return (

            <p>Firebase: Error: user Not Found</p>
        );
      }
    //   if (loading) {
    //     return <p>Loading...</p>;
    //   }
      if (user) {
          navigate('/orders')
        // return (
        //   <div>
        //     <p>Signed In User: {user.email}</p>
        //   </div>
        // );
      }
    const handleEmailBlur=event =>{
        setEmail(event.target.value)

    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
const handleUserSignIng =event =>{
    event.preventDefault();

    signInWithEmailAndPassword(email,password)
    
}

    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Login</h2>
           <form onSubmit={handleUserSignIng} className='input-group'>
                <span>Email</span><br />
                <input onBlur={handleEmailBlur} type="text" required/><br />
                <span>Password</span><br />
               
                <input onBlur={handlePasswordBlur} type="password" required /><br />
    
               <p>{error.email}</p>
                <input className='inputBtn' type="submit" value="Login" />
               


            </form>

            <p>Already Have an account?<Link to="/signup"> Create New Account</Link></p>

            <div className='challange'>
                <div className='to'>
                </div>
                <span>or</span>
                <div  className='to'>

                </div>
            </div>
            <button className='googleBtn'><img src={image} alt="" /> Continue With Google</button>

           </div>
           </div>
    );
};

export default Login;