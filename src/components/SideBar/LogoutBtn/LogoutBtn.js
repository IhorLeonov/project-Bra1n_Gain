import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, LogoutButtonIcon } from './LogoutBtn.styled';
import { useTranslation } from 'react-i18next';


export const LogoutBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <LogoutButton type="button" onClick={handleLogout}>
      {t('btn.LogOut')}
      <LogoutButtonIcon />
    </LogoutButton>
  );
};
