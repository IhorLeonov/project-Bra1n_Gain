import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { MainWrapper } from 'components/Header/components';
import { Wrapper, WrapperForFixSideBar } from './MainLayout.styled';

export default function MainLayout() {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  return (
    <>
      <Wrapper>
        <WrapperForFixSideBar>
          {isVisible && <SideBar onToggle={toggleSidebar} />}
        </WrapperForFixSideBar>
        <MainWrapper>
          <Header onToggle={toggleSidebar} />
          {/* <Suspense fallback={null}> */}
          <Outlet />
          {/* </Suspense> */}
        </MainWrapper>
      </Wrapper>
    </>
  );
}
