import { UserNav } from 'components/SideBar/UserNav/UserNav';
import { LogoutBtn } from 'components/SideBar/LogoutBtn/LogoutBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Container1,
  CloseIcon,
  Header,
  LogoContainer,
  Logo,
  Heading,
  ButtonClose,
  ItalicLetters,
} from './SideBar.styled';

export const SideBar = ({
  doActiveCalendar,
  doActiveAccount,
  toggleSidebar,
}) => {

  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleCloseButtonClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setIsOpen(windowWidth >= 1280);
  }, [windowWidth]);

  const SidebarContainer = windowWidth < 1280 ? Container1 : Container;
  
  return (
    <>
      {isOpen && (
        <SidebarContainer>
          <div>
            <Header>
              <Link to="/">
                <LogoContainer>
                  <Logo />
                  <Heading>
                    G<ItalicLetters>oo</ItalicLetters>seTrack
                  </Heading>
                </LogoContainer>
              </Link>
              <ButtonClose type="button" onClick={handleCloseButtonClick}>
                <CloseIcon />
              </ButtonClose>
            </Header>
            <UserNav
              doActiveCalendar={doActiveCalendar}
              doActiveAccount={doActiveAccount}
              toggleSidebar={toggleSidebar}
            />
            </div>
          <LogoutBtn />
        </SidebarContainer>
      )}
    </>
  );
};

SideBar.propTypes = {
  doActiveCalendar: PropTypes.func,
  doActiveAccount: PropTypes.func,
  toggleSidebar: PropTypes.func,
};