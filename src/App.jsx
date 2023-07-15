import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { lazyRetry } from 'utils/lazyRetry';

const Home = lazy(() => lazyRetry(() => import('pages/Home/Home')));
const Register = lazy(() => lazyRetry(() => import('pages/Register/Register')));
const Login = lazy(() => lazyRetry(() => import('pages/Login/Login')));
const NotFound = lazy(() => lazyRetry(() => import('pages/NotFound/NotFound')));

const EmailConfirmationPage = lazy(() =>
  lazyRetry(() => import('pages/EmailConfirmationPage/EmailConfirmationPage'))
);

const AccountPage = lazy(() =>
  lazyRetry(() => import('pages/Account/AccountPage'))
);
const Calendar = lazy(() =>
  lazyRetry(() => import('pages/CalendarPage/CalendarPage'))
);
const MainLayout = lazy(() =>
  lazyRetry(() => import('pages/MainLayout/MainLayout'))
);
const StatisticsPage = lazy(() =>
  lazyRetry(() => import('pages/StatisticsPage/StatisticsPage'))
);
const ChoosedMonth = lazy(() =>
  lazyRetry(() => import('components/ChoosedMonth/ChoosedMonth'))
);
const ChoosedDay = lazy(() =>
  lazyRetry(() => import('components/ChoosedDay/ChoosedDay'))
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader width={96} />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/layout/calendar"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/layout/calendar"
              component={<Login />}
            />
          }
        />
        <Route
          path="/verification/:verificationCode"
          element={
            <RestrictedRoute
              redirectTo="/layout/calendar"
              component={<EmailConfirmationPage />}
            />
          }
        />
        <Route
          path="/layout"
          element={
            <PrivateRoute redirectTo="/login" component={<MainLayout />} />
          }
        >
          <Route path="account" element={<AccountPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="calendar" element={<Calendar />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDate" element={<ChoosedDay />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
