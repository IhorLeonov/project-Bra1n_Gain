import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Home = lazy(() => import('pages/Home/Home'));
const AccountPage = lazy(() => import('pages/Account/AccountPage'));
const Calendar = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage/StatisticsPage'));
const ChoosedMonth = lazy(() => import('components/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('components/ChoosedDay/ChoosedDay'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader width={96} />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<Register />} />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<Login />} />
          }
        />
        {/* 
        <Route
          path="account"
          element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          }
        /> */}
        <Route path="account" element={<AccountPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route
          path="calendar"
          element={
            <PrivateRoute redirectTo="/login" component={<Calendar />} />
          }
        >
          <Route
            path="month/:currentDate"
            element={
              <PrivateRoute redirectTo="/login" component={<ChoosedMonth />} />
            }
          />
          <Route
            path="day/:currentDate"
            element={
              <PrivateRoute redirectTo="/login" component={<ChoosedDay />} />
            }
          />

        </Route>   
      </Route>
    </Routes>
  );
};
