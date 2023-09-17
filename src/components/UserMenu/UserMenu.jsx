import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUserEmail);

  return (
    <div className={css.container}>
      <p className={css.text}>{email}</p>
      <button className={css.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
