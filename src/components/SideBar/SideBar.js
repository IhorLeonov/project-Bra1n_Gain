import { UserNav } from 'components/SideBar/UserNav/UserNav';
import { LogoutBtn } from 'components/SideBar/LogoutBtn/LogoutBtn';
import { useState } from 'react';
import {
  Container,
  CloseIcon,
  Header,
  LogoContainer,
  Logo,
  Heading,
  Button,
  OoTxt,
} from './SideBar.styled';
import PropTypes from 'prop-types';

export const SideBar = ({ doActiveCalendar, doActiveAccount, toggleSidebar }) => {
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
            <LogoContainer>
              <Logo/>
              <Heading>
                G<OoTxt>oo</OoTxt>seTrack
              </Heading>
            </LogoContainer>
            <Button type="button" onClick={handleCloseButtonClick}>
              <CloseIcon/>
            </Button>
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

