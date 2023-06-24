import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/HomePage'));
const AccountPage = lazy(() => import('pages/Account/AccountPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
    </Routes>
  );
};
