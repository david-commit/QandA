import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-main-container'>
      <form id='login-form'>
        <h1>Login</h1>
        <div>

        <input type='text' aria-label='email' placeholder='Email' />
        </div>
        <div>

        <input type='password' aria-label='password' placeholder='Password' />
        </div>
        <button type='submit'>Login</button>
        <p>
          Forgot password? <Link to='/reset-password'>Reset</Link>
        </p>
        <hr width='100%' />
        <p>
          Dont have an account? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
