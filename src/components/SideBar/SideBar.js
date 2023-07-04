import { UserNav } from 'components/SideBar/UserNav/UserNav';
import { LogoutBtn } from 'components/SideBar/LogoutBtn/LogoutBtn';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSideBarToggle } from 'redux/auth/selectors';
import { toggleSideBar } from 'redux/auth/authSlice';
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
  const dispatch = useDispatch();
  const sideBarShowingValue = useSelector(selectSideBarToggle);
  const handleSideBarShow = () => dispatch(toggleSideBar());

  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  const renderСondition = windowWidth >= 1280 || sideBarShowingValue;

  return (
    <>
      {renderСondition && (
        <SidebarContainer isOpen={isOpen}>
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
              <ButtonClose type="button" onClick={handleSideBarShow}>
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
