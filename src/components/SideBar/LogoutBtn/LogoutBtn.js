import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, LogoutButtonIcon } from './LogoutBtn.styled';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <LogoutButton type="button" onClick={handleLogout}>
      Log out
      <LogoutButtonIcon>
        <use
          xlinkHref={process.env.PUBLIC_URL + '/images/sprite.svg#icon-logout'}
        ></use>
      </LogoutButtonIcon>
    </LogoutButton>
  );
};
