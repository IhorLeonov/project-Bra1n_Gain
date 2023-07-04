import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { lazy, useEffect, ComponentType } from 'react';
import { lazy, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';

// const lazyRetry = function (componentImport) {
//   return new Promise((resolve, reject) => {
//     // check if the window has already been refreshed
//     const hasRefreshed = JSON.parse(
//       window.sessionStorage.getItem('retry-lazy-refreshed') || 'false'
//     );
//     // try to import the component
//     componentImport()
//       .then(component => {
//         window.sessionStorage.setItem('retry-lazy-refreshed', 'false'); // success so reset the refresh
//         resolve(component);
//       })
//       .catch(error => {
//         if (!hasRefreshed) {
//           // not been refreshed yet
//           window.sessionStorage.setItem('retry-lazy-refreshed', 'true'); // we are now going to refresh
//           return window.location.reload(); // refresh the page
//         }
//         reject(error); // Default error behaviour as already tried refresh
//       });
//   });
// };

// const YourPage = lazy(() =>
//   lazyRetry(() => import('./pages/YourPage'), 'YourPage')
// );

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Home = lazy(() => import('pages/Home/Home'));
const AccountPage = lazy(() => import('pages/Account/AccountPage'));
const Calendar = lazy(() => import('pages/CalendarPage/CalendarPage'));
const MainLayout = lazy(() => import('pages/MainLayout/MainLayout'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

const ChoosedMonth = lazy(() => import('components/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('components/ChoosedDay/ChoosedDay'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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
