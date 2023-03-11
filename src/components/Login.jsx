import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-main-container'>
      <form id='login-form'>
        <h1>Login</h1>
        <div>
          <input type='text' aria-label='email' placeholder='Email' />
          <i class='fa-solid fa-envelope'></i>
        </div>
        <div>
          <input type='password' aria-label='password' placeholder='Password' />
          <i class='fa-solid fa-lock'></i>
        </div>
        <button type='submit'>Login</button>
        <section>
        <p>
          Forgot password? <Link to='/reset-password'>Reset</Link>
        </p>
        <hr width='80%' />
        <p>
          Dont have an account? <Link to='/register'>Register</Link>
        </p>
        </section>
      </form>
    </div>
  );
};

export default Login;
