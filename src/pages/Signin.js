import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/Login.css';

function Signin() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/home'); 
    };
  return (
    <div>
    <Header/>
    <div className="login-container">
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter your Email" name="email" required/>
    <label for="username"><b>Username</b></label>
<input type="text" placeholder="Enter Username" name="username" required/>

<label for="pswd"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="pswd" required/>
<label for="pswd"><b>Confirm Password</b></label>
<input type="password" placeholder="Confirm Password" name="pswd" required/>


<button type="submit">Sign in</button>
</form>
</div>
</div>
    <Footer/>
</div>
  )
}

export default Signin