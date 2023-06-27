import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { HomePageHeader } from '../../components/HomePageHeader/HomePageHeader';


export const SharedLayout = () => {
  return (
    <>
          <HomePageHeader />
      <Container>
        <Suspense fallback={<Loader width={96} />}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
    </>
  );
};
