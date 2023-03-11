import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className='logo'>QandA</div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/questions'>See questions</NavLink>
        <NavLink to='/login'>
          <button>Login</button>
        </NavLink>
        <NavLink to='/register'>
          <button>Register</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
