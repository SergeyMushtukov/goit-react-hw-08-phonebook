import css from './AuthNav.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
