import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/HomePage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  );
};
