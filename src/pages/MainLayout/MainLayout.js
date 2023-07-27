import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Wrapper, MainWrapper, Container } from './MainLayout.styled';
import { Footer } from 'components/Footer/Footer';

export default function MainLayout() {
  const [isVisible, setVisible] = useState(true);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  return (
    <Wrapper>
      <Container>
        {isVisible && <SideBar onToggle={toggleSidebar} />}
        <MainWrapper>
          <Header onToggle={toggleSidebar} />
          <Outlet />
        </MainWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
}
