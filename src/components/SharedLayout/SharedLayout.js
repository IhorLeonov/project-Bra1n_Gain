import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'constants/Theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/selectors';

export const SharedLayout = () => {
  const themeValue = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themeValue ? lightTheme : darkTheme}>
      <Container>
        <Suspense fallback={<Loader width={96} />}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};
