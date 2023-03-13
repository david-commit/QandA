import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user, setUser }) => {
  return (
    <header>
      <div className='logo'>QandA</div>
      <nav>
        <NavLink to='/questions'>Questions</NavLink>
        {!user ? (
          <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>
              <button>Login</button>
            </NavLink>
            <NavLink to='/register'>
              <button>Register</button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/'>Your Questions</NavLink>
            <NavLink to='/'>Ask Question</NavLink>
            <NavLink to='/'>
              <button>Logout</button>
            </NavLink>
          </>
        )}
      </nav>
      <div className='nav-icons'>
        <i class='fa-solid fa-bars'></i>
      </div>
    </header>
  );
};

export default NavBar;
