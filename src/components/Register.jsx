import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ baseURL }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  // Register user
  const handleRegister = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: name,
        email,
        phone,
        role,
        password,
      }),
    }).then((response) => {
      if (response.ok) {
        localStorage.setItem('user', newuser.token);
      } else {
        response.json().then(setErrors(response));
      }
    });
  };

  return (
    <div className='login-main-container'>
      <form id='login-form' onSubmit={handleRegister}>
        <h1>Create account</h1>
        <div>
          <input
            type='text'
            aria-label='full name'
            placeholder='Full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <i class='fa-solid fa-user'></i>
        </div>
        <div>
          <input
            type='text'
            aria-label='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i class='fa-solid fa-envelope'></i>
        </div>
        <div>
          <input
            type='tel'
            aria-label='tel'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <i class='fa-solid fa-phone'></i>
        </div>
        <div>
          <input
            type='text'
            aria-label='role'
            placeholder='Community role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <i class='fa-solid fa-user-doctor'></i>
        </div>
        <div>
          <input
            type='password'
            aria-label='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
};

export default Register;
