import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUP = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
   
   const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate();
   
    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }
    console.log(email)

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);


    }
    if(user){
        navigate('/shop')

    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('You two password ')
            return;
        }
        if(password.length < 6 ){
            setError('Password must be 6 charachters or longer');
            return;
        }
        
       
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleCreateUser} className='input-group'>

                        <span>Email</span><br />
                        <input onBlur={handleEmailBlur} type="text" required /><br />
                        <span>Password</span><br />

                        <input onBlur={handlePasswordBlur} type="password" required /><br />
                        <span>Confirm Password                                 </span><br />
                        <input onBlur={handleConfirmPassword}  type="password" required /><br />
                        <p>{error}</p>
                        <input className='inputBtn' type="submit" value="Sign Up" />



                    </form>

                    <p>Already Have an account?<Link to="/login">Login</Link></p>


                </div>
            </div>
        </div>
    );
};

export default SignUP;      