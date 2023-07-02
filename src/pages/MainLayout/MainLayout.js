import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { MainWrapper } from 'components/Header/components';
import { Wrapper } from './MainLayout.styled';

export default function MainLayout() {
  const [isVisible, setVisible] = useState(true);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  return (
    <Wrapper>
      {isVisible && <SideBar onToggle={toggleSidebar} />}
      <MainWrapper>
        <Header onToggle={toggleSidebar} />
        <Outlet />
      </MainWrapper>
    </Wrapper>
  );
}
