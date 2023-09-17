import css from "./AppBar.module.css"
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <header className={css.header} >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
