import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='login-main-container'>
      <form id='login-form'>
        <h1>Create account</h1>
        <div>
          <input type='text' aria-label='full name' placeholder='Full name' />
          <i class='fa-solid fa-user'></i>
        </div>
        <div>
          <input type='text' aria-label='email' placeholder='Email' />
          <i class='fa-solid fa-envelope'></i>
        </div>
        <div>
          <input type='tel' aria-label='tel' placeholder='Phone' />
          <i class='fa-solid fa-phone'></i>
        </div>
        <div>
          <input type='text' aria-label='role' placeholder='Community role' />
          <i class='fa-solid fa-user-doctor'></i>
        </div>
        <div>
          <input type='password' aria-label='password' placeholder='Password' />
          <i class='fa-solid fa-lock'></i>
        </div>
        <button type='submit'>Login</button>
        <section>
          <hr width='80%' />
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </section>
      </form>
    </div>
  );
}

export default Register