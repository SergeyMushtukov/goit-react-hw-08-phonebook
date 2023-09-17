import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : `${css.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
