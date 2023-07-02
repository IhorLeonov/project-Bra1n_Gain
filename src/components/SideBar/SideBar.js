import { UserNav } from 'components/SideBar/UserNav/UserNav';
import { LogoutBtn } from 'components/SideBar/LogoutBtn/LogoutBtn';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
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

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Container>
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
        </Container>
      )}
    </>
  );
};

SideBar.propTypes = {
  doActiveCalendar: PropTypes.func,
  doActiveAccount: PropTypes.func,
  toggleSidebar: PropTypes.func,
  // isOpenSidebarMobile: PropTypes.bool
};
