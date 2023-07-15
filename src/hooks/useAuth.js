import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
  selectIsVerified,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered)
  const isVerified = useSelector(selectIsVerified)
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isRegistered,
    isVerified,
    isLoggedIn,
    isRefreshing,
    user,
  };
};