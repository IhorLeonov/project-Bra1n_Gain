import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const { name, email, phone, birthday, skype, userImgUrl } = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    name,
    email,
    phone,
    birthday,
    skype,
    userImgUrl,
  };
};
