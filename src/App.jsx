import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const AccountPage = lazy(() => import('pages/Account/AccountPage'));
const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

const Calendar = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);
const ChoosedMonth = lazy(() => import('components/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('components/ChoosedDay/ChoosedDay'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />}>
          <Route path="month/:dayNum" element={<ChoosedMonth />} />
          <Route path="day/:dayNum" element={<ChoosedDay />} />
        </Route>
        <Route path="/statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  );
};
