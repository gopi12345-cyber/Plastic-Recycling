import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/Login.css';
function Login() {
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
        <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required/>

    <label for="pswd"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="pswd" required/>

    <button type="submit">Login</button>
    </form>
    </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Login